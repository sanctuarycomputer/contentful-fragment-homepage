import React from 'react';
import cx from "classnames";

import './Markdown.scss';

import Remarkable from 'react-remarkable';

const Markdown = ({ src }) => (
  <div className="Markdown">
    <Remarkable source={src} />
  </div>
);

export default Markdown;
