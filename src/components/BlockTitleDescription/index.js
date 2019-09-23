import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import get from "utils/get";
import richTextOptions from "utils/richTextOptions";

class BlockTitleDescription extends PureComponent {
  render() {
    const fields = get(this, 'props.block.fields', {});
    const title = get(fields, 'title', '');
    const richText = get(fields, 'richText', {});

    return (
      <div className="BlockTitleDescription px1_75 lg:px4 py4 flex items-center">
        <div className="BlockTitleDescription__container w100 mxauto block-width flex flex-col lg:flex-row justify-center">
          <div className="col-12 lg:col-4 w100">
            {!!title ? <h2 className="block-title bold mt_5 mb1">{title}</h2> : null}
          </div>
          <div className="col-12 lg:col-8 w100 lg:pl1 lg:mt1">
            {documentToReactComponents(richText, richTextOptions('blockTitleDescription'))}
          </div>
        </div>
      </div>
    );
  }
}

BlockTitleDescription.propTypes = {
  block: PropTypes.shape({
    fields: PropTypes.shape({
      richText: PropTypes.shape({
        nodeType: PropTypes.string,
        data: PropTypes.object,
        content: PropTypes.arrayOf(PropTypes.shape({
          nodeType: PropTypes.string,
          content: PropTypes.arrayOf(PropTypes.shape({
            data: PropTypes.object,
            marks: PropTypes.array,
            nodeType: PropTypes.string,
            value: PropTypes.string
          })),
          data: PropTypes.object
        }))
      })
    })
  })
};

BlockTitleDescription.defaultProps = {
  block: {
    fields: {
      richText: {
        nodeType: '',
        data: {},
        content: []
      }
    }
  }
};

export default BlockTitleDescription;
