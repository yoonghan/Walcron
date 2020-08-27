`use strict`

import * as React from "react";
import { useEffect, useRef } from "react";
import {useSpring, animated} from 'react-spring';

interface IPlainSection {
  title?:string;
}

const PlainSection:React.FC<IPlainSection> = ({title, children}) => {
  const [props, set] = useSpring(()=>({opacity: 0, padding: 0}));
  const markAndIndicator = useRef<HTMLDivElement>(null);

  const attachObserverForImageDisplay = () => {
    if(markAndIndicator.current !== null) {
      const options = {
        rootMargin: "100px 0px 0px 0px",
        threshold: 0.45
      };
      const callback = function(entries: Array<IntersectionObserverEntry>) {
        entries.forEach(function(entry) {
          if(entry.intersectionRatio > 0.4) {
            set({opacity: 1, padding: 20})
          }
        })
      }
      const observer = new IntersectionObserver(callback, options);
      observer.observe(markAndIndicator.current)
    }
  }

  /** Use browser rather than react to monitor change **/
  useEffect(() => {
    attachObserverForImageDisplay();
  }, []);

  return (
    <div className="stopper">
      <animated.div
        style={props}
        >
        <div className="container" ref={markAndIndicator} >
          {title && <h2 className="title">{title}</h2>}
          <div className="desc">
            {children}
          </div>
        </div>
      </animated.div>

      <style jsx>{`
        .stopper {
          overflow: hidden;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 90vh;
          padding: 3px;
        }
        .stopper::before {
          content: '';
          position: absolute;
          width: 90vw;
          height: 90vh;
          border: 1px solid rgba(100,100,100);
          transform: rotate(30deg);
          z-index: -1;
          background-color: rgba(2,2,2);
          margin-top: 10vh;
        }
        .title {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default PlainSection;