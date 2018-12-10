import React, { PureComponent } from "react";
import cx from "classnames";
import "./DetailBlock.scss";

import Markdown from "components/base/Markdown";

class DetailBlock extends PureComponent {

  render() {
    return (
      <div className={cx("DetailBlock flex flex-col items-center px1 py4 mb4 lg:py8 lg:mb8")}>
        <div className={cx("DetailBlock__headline")}>
          <h3 className={cx("my3 sans-serif bold text-center text-dark-blue ")}>{this.props.headline}</h3>
        </div>
        <div className={cx("DetailBlock__paragraph px1 sans-serif text-dark-blue bold")}>
          <Markdown src={this.props.paragraph} />
        </div>
      </div>
    );
  }
}

export default DetailBlock;
