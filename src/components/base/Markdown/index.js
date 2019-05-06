import React from 'react';

import Remarkable from 'react-remarkable';

const Markdown = ({ src }) => (
  <div className="Markdown">
    <Remarkable source={src} />
  </div>
);

export default Markdown;
