import * as React from "react";
import NoSSR from 'react-no-ssr';
import NavMenu from "./NavMenu";
import NoSSRCommandBar from "./NoSSRCommandBar";
import NoSSRMobileMenu from "./NoSSRMobileMenu";

interface CommandBarProps {
  disableMobile?: boolean;
}

const CommandBar: React.SFC<CommandBarProps> = ({disableMobile}) => {
  return (
    <NoSSR>
      <div className={"header"} id="commandbar">
        <div className={"desktop" + (!disableMobile? " shift-to-right":"")}>
          <NoSSRCommandBar/>
          {!disableMobile && <NavMenu/>}
        </div>
        {!disableMobile && (<div className="mobile">
          <NoSSRMobileMenu/>
        </div>)}
        {disableMobile && (<img className={"logo-img"} src="/static/img/logo/logo-color.svg"/>)}
        <style jsx>{`
          .header {
            text-align: center;
            position: absolute;
            top: 0.5rem;
            left: 1.5rem;
            z-index: 2;
            right: 1.5rem;
          }
          .desktop.shift-to-right {
            position: relative;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .desktop {
            display: block;
          }
          .mobile {
            display: none;
          }
          .logo-img {
            width: 50px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
          @media only screen and (max-width: 480px) {
            .mobile {
              display: block;
            }
            .desktop {
              display: none !important;
            }
            .logo-img {
              width: 88px;
              transform: translateX(50%);
              right: 50%;
            }
          }
        `}</style>
      </div>
    </NoSSR>
  );
}

export default CommandBar;
