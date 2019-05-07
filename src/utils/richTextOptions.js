import React, { PureComponent } from "react";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import get from "utils/get";

import { Input } from 'components/base';

export default {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="block-description">{children}</p>
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const fields = get(node, 'data.target.fields', {});
      const { title, inputValue, copyIsAvailable } = fields;

      return <Input title={title} inputValue={inputValue} copyIsAvailable={copyIsAvailable} />
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fields = get(node, 'data.target.fields', {});
      const url = get(fields, 'file.url', '');
      const title = get(fields, 'title', '');

      return <img src={url} alt={title}  />
    }
  },
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  }
}