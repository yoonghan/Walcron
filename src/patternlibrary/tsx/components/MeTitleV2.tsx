`use strict`

import * as React from "react";
import { MiniPost, MiniPostProps } from './MiniPost';

import '../../scss/base';
var styles = require('../../scss/components/MeTitleV2');

interface ISection {
  title?: string;
  description?: Array<string>;
}

export interface MeTitleProps {
  title: string;
  introSection?: ISection;
  posts?: Array<MiniPostProps>;
}

export class MeTitleV2 extends React.Component<MeTitleProps, {}> {

  constructor(props:any) {
    super(props);
  }

  createPost = (postMap:MiniPostProps) => {
    const {title} = postMap;
    return (
      <div key={title}>
        <MiniPost {...postMap}/>
      </div>
    );
  };

  createIntroSection = (sectionMap:ISection) => {
    const title = sectionMap.title;
    const keyPrefix = title? title.replace(/\s/g,''): '';

    var runningNo = 0;
    const intro = sectionMap.description.map(
      descItem => {
        const keyVal = keyPrefix + String(runningNo++);
        return <p key={keyVal}>{descItem}</p>
      }
    );

    return (
      <div key={title}>
        {title && <h2>{title}</h2>}
        <div className={styles['metitle-intro-sec']}>
          {intro}
        </div>
      </div>
      );
  };

  render() {
    const {title, introSection, posts} = this.props;
    const introductionSection = introSection ? this.createIntroSection(introSection) : <div></div>;

    let postsArray = posts ? posts:[];
    const postElements = postsArray.map(
      postItem => this.createPost(postItem)
    );


    return (
      <div className={styles.metitle}>
        <div>
          <h1>{title}</h1>
          <img src={'/ext/img/logo/v2/logo-color.svg'}/>
        </div>
        <div>
          {introductionSection}
          {postElements}
        </div>
      </div>
    )
  }
}