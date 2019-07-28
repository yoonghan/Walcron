import * as React from "react";
import Head from 'next/head';
import { HtmlHead } from '../components/html/HtmlHead';
import LetterBox from "../components/LetterBox";
import HeaderOne from "../components/HeaderOne";
import HorizontalLine from "../components/HorizontalLine";
import Profiler from "../components/Profiler";

interface AboutState {
}

class About extends React.PureComponent<{}, AboutState> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HtmlHead/>
        <Head>
          <title>About Walcron</title>
          <meta name="description" content="Walcron Coorperation is a basic company setup by Yoong Han and Lee Wan for World Wide Web research purposes."/>
        </Head>
        <div className="container">
          <section>
            <HeaderOne title={"Our mission"} isLined={true}/>
            <p>
              The two of us wanted to explore more on the field to venture into
              opensource community; and what's better than to experiment and contribute
              back into that community. So we started the Walcron website to
              log our journey as well as to experiment real-time working websites.
            </p>
          </section>
          <HorizontalLine/>
          <section>
            <h2>What do we do?</h2>
            <p>
            We are coders who likes to exercise our brains in creating visual components,
            may it be websites or on a piece of paper. Our expertise are on:
            </p>
            <ul>
              <li>SEO optimized websites</li>
              <li>Mobile and PWA enabled sites</li>
              <li>Lego Mindstorm</li>
              <li>Asynchronous/Multi-threaded programs</li>
            </ul>
          </section>
          <HorizontalLine/>
          <section>
            <h2>Are we freelance for hire?</h2>
            <p>
              Well...<i>if the price is right, and we have time to allocate</i>, yes.
              We had and will be available, do reach us and we have shared our contact below.
            </p>
          </section>
          <HorizontalLine/>
          <section>
            <h2>The developers</h2>
            <Profiler
              profiles={[
                {
                  name: "Han Yoong",
                  description: (
                    <div>
                    A passionate coders who is now stuck in a "boring" company who does proprietery
                    software and hardware. With his off working hours, he spends time to read
                    and experiment new ways to improve the <i>Walcron Cooperation</i> publicity. He
                    has been contributing to Stackoverflow and sharing writeups in Github.
                    <br/><br/>
                    <i>He do likes to write in Linux types system and automate his stuffs.</i>
                    </div>
                  ),
                  imgSrc: "/static/img/profile/han.jpg"
                },
                {
                  name: "Gladys Tai",
                  description: (
                    <div>
                    An achiever with a bad attitude. She always complains that she would
                    make it in time or the task is too complex to handle. However, <i>all the projects
                    that was delivered by her, has the outcome.</i> As a girl, she spends most of
                    her time being presentable.
                    <br/><br/>
                    <i>She is a worrier and a warrior. Best described as wonder woman.</i>
                    </div>
                  ),
                  imgSrc: "/static/img/profile/gladys.jpg"
                }
              ]}
            />
          </section>
          <section>
            <h2>Contact</h2>
            If you are interested, leave your contact. Let us reach you instead.
            <LetterBox/>
          </section>
        </div>
        <style jsx>{`
          i {
            font-style: italic;
            font-weight: bold;
            font-size: 1.1rem;
          }
          i:before, i:after {
            content: '"';
          }
          p {
            padding: 10px 30px;
          }
          .about {
            padding: 20px;
          }
          h2, h3, h4 {
            text-align: center;
          }
          .container {
            max-width: 640px;
            margin: auto;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default About;
