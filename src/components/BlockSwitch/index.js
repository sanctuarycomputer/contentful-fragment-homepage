import React from 'react';
import get from 'utils/get';

import BlockTitleDescription from 'components/BlockTitleDescription';

const BlockSwitch = ({ block }) => {
  const type = get(block, 'sys.contentType.sys.id');

  const Block = type => {
    switch (type) {
      case 'blockTitleDescription':
        return (
          <BlockTitleDescription block={block}/>
        );
      default:
        return null;
    }
  };

  return Block(type);
};

export default BlockSwitch;
