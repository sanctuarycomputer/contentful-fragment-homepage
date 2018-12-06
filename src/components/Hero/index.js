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
          <h2 className={cx("sans-serif color-white")}>By Sanctuary Computer in NYC</h2>
        </div>
        <div className={cx("col-6 pt8 flex items-center flex-col justify-center")}>
          <div className={cx("Hero__content")}>
            <h3 className={cx("Hero__headline color-white sans-serif bold mb2")}>{this.props.headline}</h3>
            <h4 className={cx("Hero__sub-headline color-white sans-serif mb2")}>{this.props.subHeadline}</h4>
            <div className={cx("flex")}>
              <button className={cx("Hero__button cf-btn-primary col-6 p_5")}>Start building free</button>
              <button className={cx("Hero__button cf-btn-secondary col-6 p_5 ml1")}>Request demo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
