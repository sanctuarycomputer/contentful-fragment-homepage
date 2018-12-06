import React, { PureComponent } from "react";
import cx from "classnames";
import "./Hero.scss";

import ContentfulLogo from 'components/icons/Logo';

class Hero extends PureComponent {
  render() {
    return (
      <div className={cx("Hero p2 bg-dark-blue")}>
        <div className={cx("bg-dark-blue flex justify-between")}>
          <ContentfulLogo />
          <h2 className={cx("color-white")}>By Sanctuary Computer in NYC</h2>
        </div>
        <div className={cx("col-6 pt8 px6")}>
          <h3 className={cx("color-white")}>{this.props.headline}</h3>
          <h4 className={cx("color-light-blue")}>{this.props.subHeadline}</h4>
          <div className={cx("flex")}>
            <button className={cx("Hero__button cf-btn-primary col-6 p_5")}>Start building free</button>
            <button className={cx("Hero__button cf-btn-secondary col-6 p_5 ml1")}>Request demo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
