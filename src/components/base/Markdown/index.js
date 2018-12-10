import React from 'react';

import './Markdown.scss';

import Remarkable from 'react-remarkable';

const Markdown = ({ src }) => (
  <div className="Markdown">
    <Remarkable source={src} />
  </div>
);

export default Markdown;
