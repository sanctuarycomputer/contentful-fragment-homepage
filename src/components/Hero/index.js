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
        <div className={cx("w100 flex")}>
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
          <div className={cx("Hero__contentful-container col-6 absolute")}>
            <div className={cx("Hero__frame bg-white p2 my2 ml4 mr6")}>
              <div className={cx("Hero__frame-border")}>
                <label className={cx("cf-form-label pl1 sans-serif")}>Title</label>
                <div className={cx("pl1")}>
                  <input className={cx("cf-form-input")} placeholder="Global Settings" />
                </div>
                <div className={cx("flex justify-between pt_5 pl1")}>
                  <p className={cx("sans-serif")}>15 Characters</p>
                  <p className={cx("sans-serif")}> Requires less than 256 characters</p>
                </div>
              </div>
              <div className={cx("Hero__frame-border mt2")}>
                <label className={cx("cf-form-label pl1 sans-serif")}>Pillars/Actions Menu</label>
                <div className={cx("Hero__grey-box ml2 mt1")}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
