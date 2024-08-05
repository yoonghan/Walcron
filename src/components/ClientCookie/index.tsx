/**
 * Made for EUROPEAN regulation, but this site do not use cookies.
 * For references, pages/* need to provide the context in getInitialProps and
 * pass into the props.
 **/

import { useCallback, useEffect, useState } from "react"

const cookiePrivacy = "https://policies.google.com/technologies/cookies"
const cookieName = "termsRead"

function ClientCookie() {
  const [isCookieRead, setCookieRead] = useState(false)

  const onCookieReadClicked = useCallback(() => {
    document.cookie = `${cookieName}=true;secure;path=/`
    setCookieRead(true)
  }, [])

  useEffect(() => {
    function getCookie(cname: string) {
      let name = cname + "="
      let decodedCookie = decodeURIComponent(document.cookie)
      let ca = decodedCookie.split(";")
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
          c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ""
    }

    setCookieRead(!!getCookie(cookieName))
  }, [])

  if (isCookieRead) {
    return <></>
  } else {
    return (
      <div data-testid="cookie-dialog">
        <div>
          <div>This site uses cookies.</div>
          <p>
            This site uses cookie to monitor visits and usage traffics. We use
            google analytics, please{" "}
            <a
              href={cookiePrivacy}
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              refer here
            </a>
            .
          </p>
          <hr />
          <p>
            By proceeding on this website, you are accepting and agreed to the
            cookie usage.
          </p>
        </div>
        <div>
          <button onClick={onCookieReadClicked}>Accept</button>
        </div>
      </div>
    )
  }
}

export default ClientCookie
