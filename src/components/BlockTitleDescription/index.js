import React, { PureComponent } from "react";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cx from "classnames";
import get from "utils/get";
import richTextOptions from "utils/richTextOptions";

import Urls from 'constants/Urls';

class BlockTitleDescription extends PureComponent {
  render() {
    const fields = get(this, 'props.block.fields', {});
    const title = get(fields, 'title', '');
    const richText = get(fields, 'richText', {});

    return (
      <div className="BlockTitleDescription px1_75 lg:px4 py4 flex items-center">
        <div className="BlockTitleDescription__container w100 mxauto block-width w100 flex flex-col lg:flex-row justify-center border">
          <div className="col-12 lg:col-4 w100">
            {!!title ? <h2 className="block-title bold mt_5 mb1">{title}</h2> : null}
          </div>
          <div className="col-12 lg:col-8 w100 lg:pl1">
            {documentToReactComponents(richText, richTextOptions('blockTitleDescription'))}
          </div>
        </div>
      </div>
    );
  }
}

export default BlockTitleDescription;
