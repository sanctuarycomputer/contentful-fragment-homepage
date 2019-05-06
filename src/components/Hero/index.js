import React, { PureComponent } from "react";
import cx from "classnames";

class Hero extends PureComponent {
  render() {
    return (
      <div className={cx("Hero py2 px1 bg-color-dark-blue")}>
        <div className={cx("pt4 w100 flex")}>
          <div className={cx("col-12 lg:col-6 lg:pt8 flex items-center flex-col justify-center")}>
            <div className={cx("Hero__content")}>
              <h3 className={cx("Hero__headline color-white sans-serif bold mb2")}>{this.props.headline}</h3>
              <h4 className={cx("Hero__sub-headline color-light-blue sans-serif mb2")}>{this.props.subHeadline}</h4>
              <div className={cx("Hero__button-container flex")}>
                <button className={cx("Hero__button cf-btn-primary col-12 lg:col-6 py_75 px_25")}>Start building free</button>
                <button className={cx("Hero__button cf-btn-secondary col-12 lg:col-6 py_75 px_25")}>Request demo</button>
              </div>
            </div>
          </div>
          <div className={cx("Hero__contentful-container col-6 absolute")}>
            <div className={cx("Hero__frame bg-color-white my2 ml2 mr8")}>
              <h3 className={cx("Hero__frame__headline py1 pl4 color-black bold sans-serif")}>Global Settings</h3>
              <div className={cx("px2 pt1")}>
                <div className={cx("Hero__frame-border")}>
                  <label className={cx("cf-form-label color-sidewalk-grey pl1 block mb_5 sans-serif")}>Title</label>
                  <div className={cx("pl1")}>
                    <input className={cx("cf-form-input")} placeholder="Global Settings" />
                  </div>
                  <div className={cx("flex justify-between pt_5 pl1")}>
                    <p className={cx("sans-serif color-midnight-blue")}>15 Characters</p>
                    <p className={cx("sans-serif color-midnight-blue")}>Requires less than 256 characters</p>
                  </div>
                </div>
                <div className={cx("Hero__frame-border mt2")}>
                  <label className={cx("cf-form-label color-sidewalk-grey pl1 sans-serif")}>Pillars/Actions Menu</label>
                  <div className={cx("Hero__grey-box my1 mx1 ml2")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
