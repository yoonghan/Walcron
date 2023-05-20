/* istanbul ignore file */
/** Good case to create integration testing rather than mock testing **/
import { withNonEmptyEnvCheck } from "@/components/utils/hoc/withEnvCheck/withEnvCheck"
import WebrtcVideo from "./WebrtcVideo"

interface Props {
  appKey?: string
  cluster?: string
}

const WebRtc = ({ appKey, cluster }: Props) => {
  return (
    <div className="page-aligned-container">
      <h1>Video call with Web RTC</h1>
      <WebrtcVideo appKey={appKey!} cluster={cluster!} />
    </div>
  )
}

const getProcess = () => ({
  appKey: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
})

export default withNonEmptyEnvCheck(
  WebRtc,
  getProcess,
  "Pusher initialization failed due to missing environment variable."
)
