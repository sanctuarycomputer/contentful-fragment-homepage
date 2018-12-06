import React, { PureComponent } from "react";
import cx from "classnames";
import "./Hero.scss";

class Hero extends PureComponent {
  render() {
    return (
      <div className={cx("Hero bg-dark-blue vh100")}>
        <div className={cx("color-white")}>Hello World</div>
      </div>
    );
  }
}

export default Hero;
