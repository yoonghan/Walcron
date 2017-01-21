import * as React from "react";

import { MenuDrop, MenuDropListing, MenuDropProps } from "./MenuDrop";
import '../../css/base';

var styles = require('../../css/components/Header');
declare function require(path: string): any;

export interface HeaderProp {
  menus: Array<MenuDropListing>;
}

export class Header extends React.Component<HeaderProp, {}> {

  constructor(props:any) {
    super(props);
  }

  render() {
    const mnuDropListing:Array<MenuDropListing> = this.props.menus;

    return (
      <div className={styles.hdr}>
        <div className={styles['hdr-div']}>
          <h4 className={styles['hdr-remark']}>A DEVELOPER SITE</h4>
          <MenuDrop listing={mnuDropListing}/>
          <div className={styles['hdr-logo']}>
            <a href="/"><img src='/ext/img/logo/logoOnlyWhiteBg.svg' /></a>
          </div>
        </div>
      </div>
    );
  }
}