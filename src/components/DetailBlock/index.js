import React, { PureComponent } from "react";
import cx from "classnames";
import "./DetailBlock.scss";

class DetailBlock extends PureComponent {

  render() {
    return (
      <div className={cx("DetailBlock flex flex-col items-center pt8")}>
        <div className={cx("DetailBlock__headline")}>
          <h3 className={cx("my3 sans-serif bold text-center text-dark-blue ")}>{this.props.headline}</h3>
        </div>
        <div className={cx("DetailBlock__paragraph")}>
          <p className={cx("sans-serif text-dark-blue")}>{this.props.paragraph}</p>
        </div>
      </div>
    );
  }
}

export default DetailBlock;