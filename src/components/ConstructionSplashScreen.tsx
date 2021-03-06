`use strict`

import * as React from "react";
import Button from "./Button";
import {fontColor, background} from "../shared/style";

const ConstructionSplashScreen: React.SFC<any> = () => {
  return (
    <div className={"construction-splash-screen-container"}>
      <div className={"construction-splash-screen-text-container"}>
        <div className={"banner"}>(404) NOT FOUND</div>
        <img src="/img/construction.svg" alt="construction"/>
        <hr/>
        <div className={"buttonContainer"}>
          <Button href="/">Return as page is not found</Button>
        </div>
      </div>
      <style jsx>{`
        .buttonContainer {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        .buttonContainer :global(a) {
          background-color: #000;
          color: #FFF;
        }
        .banner {
          text-align: center;
          font-size: 2rem;
          font-family: fantasy, arial, sans-serif;
          padding-bottom: 5px;
        }
        .footnote {
          font-size: 1rem;
          text-align: center;
          font-family: arial, sans-serif;
        }
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 50%;
          opacity: 0.3;
          max-height: 320px;
        }
        h5 {
          margin: 10px 0 0 0;
          font-weight: normal;
          font-family: arial;
        }
        hr {
          margin: 20px 0;
          border-top: 1px solid #90A4AE;
        }
        .construction-splash-screen-container {
          position: relative;
          height: 100vh;
          min-width: 320px;
          background: ${background['construction']};
          color: #000;
        }
        .construction-splash-screen-text-container {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          width: 100%;
        }
        .construction-splash-screen-container h1 {
          font-size: 5rem;
          color: ${fontColor['construction-h1']};
          text-align: center;
        }
        .construction-splash-screen-container h5 {
          font-size: 1rem;
          color: ${fontColor['construction-h5']};
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default ConstructionSplashScreen;
