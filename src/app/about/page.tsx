import * as React from "react"
import LetterBox from "@/components/LetterBox"
import HeaderOne from "@/components/HeaderOne"
import Profiler from "@/components/Profiler"
import ScrollToTop from "@/components/ScrollToTop"
import hanImg from "@/images/profile/han.webp"
import gladysImg from "@/images/profile/gladys.webp"

const About = () => {
  return (
    <React.Fragment>
      <div className={"page-aligned-container"}>
        <HeaderOne title={"About Us"} isLined={true} />
        <p>
          Walcron is a by-product of a couple&apos;s journey in IT industry. The
          Walcron website was created for experimentation in optimizing and
          prototyping new Web technologies. Ocassionally this is being
          re-contributed back into the open-source community. Han and Gladys
          started the Walcron website to log their development journey. As well
          as to experiment real-time working websites.
        </p>
        <hr />
        <section>
          <h2>What do we do?</h2>
          <p>
            We are coders who likes to crank our brains in creating visual
            components. May it be websites or on a piece of paper, our expertise
            are on:
          </p>
          <ul>
            <li>SEO optimized websites</li>
            <li>Mobile and PWA enabled sites</li>
            <li>Lego Mindstorm</li>
            <li>Asynchronous/Multi-threaded programs</li>
          </ul>
        </section>
        <hr />
        <section>
          <h2>Are we freelance for hire ?</h2>
          <p>
            Well...<i>if the price is right, and we have time to allocate</i>,
            <strong> yes</strong>. Provide us your contact information and we
            will reach out to you.
          </p>
        </section>
        <hr />
        <section>
          <h2>The developers</h2>
          <Profiler
            profiles={[
              {
                name: "Han Yoong",
                description: (
                  <p>
                    A passionate coder who is now stuck in a proprietery
                    software and hardware industry. In his free time, he spends
                    time to read and experiment new ways to improve the{" "}
                    <i>Walcron Cooperation</i> publicity. He has been
                    contributing to Stackoverflow and sharing write-ups in
                    Github.
                    <br />
                    <br />
                    <i>An enthusiast programmer.</i>
                  </p>
                ),
                imgSrc: hanImg,
              },
              {
                name: "Gladys Tai",
                description: (
                  <p>
                    An achiever with a bad-ass attitude. She always complains
                    that she wouldn&apos;t make it in time or the task are too
                    complex to handle. However,{" "}
                    <i>
                      all the projects that was/has been delivered by her are
                      faultless.
                    </i>{" "}
                    As a girl, she spends most of her time being presentable.
                    <br />
                    <br />
                    <i>She is a worrier and a warrior.</i>
                  </p>
                ),
                imgSrc: gladysImg,
              },
            ]}
          />
        </section>
        <hr />
        <section>
          <h2>Contact</h2>
          <div className="p-padding center">
            <LetterBox />
          </div>
        </section>
      </div>
      <ScrollToTop isLight={true} />
    </React.Fragment>
  )
}

export default About
