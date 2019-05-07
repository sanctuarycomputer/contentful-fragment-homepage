import React, { PureComponent } from "react";
import cx from "classnames";
import get from "utils/get";

import Urls from 'constants/Urls';

class BlockTitleDescription extends PureComponent {
  render() {
    const fields = get(this, 'props.block.fields', {});
    
    return (
      <div className="BlockTitleDescription px1_75 lg:px4 bg-color-dark-blue flex items-center">
        <div className="w100 mxauto block-width w100 flex flex-col lg:flex-row items-center justify-center">
          
        </div>
      </div>
    );
  }
}

export default BlockTitleDescription;
