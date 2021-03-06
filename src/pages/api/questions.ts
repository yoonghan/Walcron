import { NextApiRequest, NextApiResponse } from 'next';
import ApiController from "../../shared/api";
import { PUSHER } from "../../shared/const";

const dbname = "questions";

const getRef = (identifier:string) => {
  const db = ApiController.getFirebaseInitializeApp().database();
  const ref = db.ref(`${dbname}/${identifier}`);
  return ref;
}

const sentToPusher = (message: string, res: NextApiResponse) => {
  const pusher = ApiController._initNonAuthPusher();

  const channelName = `${PUSHER.channel_prefix}${'doctorx'}`;

  if(pusher !== null && typeof pusher !== "undefined") {
    pusher.trigger(
      channelName,
      `${PUSHER.event}`,
      {
      "message": message
      },
      () => {
        res.status(200).json(
          {
            "status": "ok"
          }
        )
      }
    );
  }
  else {
    res.status(400).json(
      {
        "status": "fail"
      }
    );
  }
}

const writeToDb = async (req: NextApiRequest, res: NextApiResponse) => {
  const {data} = req.body;
  const ref = getRef('' + new Date().getTime());
  const dataAsJSON = JSON.parse(data);
  ref.set(dataAsJSON);
  sentToPusher(data, res);
}

const retriveDb = async ({}, res: NextApiResponse) => {
  const ref = getRef('');
  ref.once('value').then(function(snapshot) {
    const questionaires = snapshot.val();
    res.status(200).json(questionaires);
  });
}

const _sendMethodError = (res:NextApiResponse, messages:Array<string>) => {
  res.status(405).json(messages);
}

export const config = {
    api: {
      bodyParser: true,
    }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  switch(req.method) {
    case "POST":
      writeToDb(req, res);
      break;
    case "GET":
      retriveDb(req, res);
      break;
    default:
      _sendMethodError(
        res,
        [
          `method ${req.method} not recognized.`
        ]
      );
  }
}
