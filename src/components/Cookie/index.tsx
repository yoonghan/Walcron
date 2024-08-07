/**
 * Made for EUROPEAN regulation, but this site do not use cookies.
 * For references, pages/* need to provide the context in getInitialProps and
 * pass into the props.
 **/

import * as React from "react"
import styles from "./Cookie.module.css"

interface CookieProps {
  isClosed: boolean
  cookieName: string
}

const cookiePrivacy = "https://policies.google.com/technologies/cookies"

const Cookie = (props: CookieProps) => {
  const [isClosed, setClosed] = React.useState(props.isClosed || false)

  const reactToCookieButton = () => {
    setClosed(true)
  }

  if (isClosed || props.isClosed) {
    return <React.Fragment />
  } else {
    return (
      <div className={styles.container} data-testid="cookie-dialog">
        <div className={styles.message}>
          <div className={styles.title}>This site uses cookies.</div>
          <p>
            This site uses cookie to monitor visits and usage traffics. We use
            google analytics, please{" "}
            <a
              href={cookiePrivacy}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              {" "}
              refer here
            </a>
            .
          </p>
          <p>
            By proceeding on this website, you are accepting and agreed to the
            cookie usage.
          </p>
        </div>
        <div className={styles["button-container"]}>
          <button onClick={reactToCookieButton}>Close</button>
        </div>
      </div>
    )
  }
}

export default Cookie
