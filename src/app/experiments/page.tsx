import Card from "@/components/Card"
import { memo } from "react"
import ScrollToTop from "@/components/ScrollToTop"
import styles from "./Experiments.module.css"
import LetterBox from "@/components/LetterBox"

export const metadata = {
  title: "Experiments",
  description: "Experimental pages for POC, and UI/UX",
}

const Experiments = ({}) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`page-aligned-container`}>
          <h1 className="title">Experimental projects</h1>
          <div>
            <p>
              Incomplete or projects that are used for test-beds
              <small>(due to migration most are not moved over)</small>
            </p>
            <Card
              cards={[
                {
                  id: "amp",
                  title: "Accelerated Mobile Pages",
                  description: "Google's approach of fast mobile page.",
                  href: "/experiments/amp",
                  target: "_self",
                },
                {
                  id: "storybook",
                  title: "Storybook",
                  description: "Design and styling of UX/UI of Walcron page.",
                  href: "/experiments/storybook",
                  target: "_self",
                },
                {
                  id: "performance",
                  title: "Performance",
                  description: "Validate react performance",
                  href: "/experiments/performance",
                  target: "_self",
                },
              ]}
            />
          </div>
        </div>
        <hr />
        <section>
          <h2>Contact</h2>
          <div className="p-padding center">
            <LetterBox />
          </div>
        </section>
      </div>
      <ScrollToTop />
    </>
  )
}

export default memo(Experiments)
