import React from "react";
import { BLOCKS } from '@contentful/rich-text-types';
import get from "utils/get";

import { Input } from 'components/base';

export default type => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        switch (type) {
          case 'blockTitleDescription':
            return (
              <p className="block-description BlockTitleDescription__description">
                {children}
              </p>
            );
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const fields = get(node, 'data.target.fields', {});
        const { inputValue, copyIsAvailable } = fields;

        return (
          <Input inputValue={inputValue} 
            copyIsAvailable={copyIsAvailable} 
          />
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const fields = get(node, 'data.target.fields', {});
        const url = get(fields, 'file.url', '');
        const title = get(fields, 'title', '');
       
        switch (type) {
          case 'blockTitleDescription':
            return (
              <img className="BlockTitleDescription__image w100" src={url} alt={title}  />
            );
          default:
            return null;
        }
      }
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, i) => {
        return [...children, textSegment.length <= 0 && <br key={i} />, textSegment];
      }, []);
    }
  }
}