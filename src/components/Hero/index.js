import React, { PureComponent } from "react";
import cx from "classnames";
import "./Hero.scss";

class Hero extends PureComponent {
  render() {
    return (
      <div className={cx("Hero")}>
        Hello World
      </div>
    );
  }
}

export default Hero;
