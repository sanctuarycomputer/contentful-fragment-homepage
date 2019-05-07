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
      <div className="BlockTitleDescription px1_75 lg:px4 flex items-center">
        <div className="w100 mxauto block-width w100 flex flex-col lg:flex-row items-center justify-center">
          <div>
            {!!title ? <h2>{title}</h2> : null}
          </div>
          <div>
            {documentToReactComponents(richText, richTextOptions)}
          </div>
        </div>
      </div>
    );
  }
}

export default BlockTitleDescription;
