import React, { PureComponent } from 'react';

import WaveSvg from 'components/WaveSvg';

class Footer extends PureComponent {
  render() {
    return (
      <div className="Footer relative w100 px1_75 md:px4 block-background flex flex-col items-center justify-center">
        <div className="Footer__container flex flex-col items-center justify-center">

          <img className="Nav__icon mb2" 
            src="/assets/images/666.svg" 
            alt="contentful fragment logo"
          />

          <p className="sans-serif color-white text-center">
            by NYC based Contentful experts
          </p>
          <a 
            href="https://www.sanctuary.computer/"
            rel="noopener noreferrer" 
            target="_blank"
            className="Footer__sc-logo w100"
          >
            <img className="w100 mt_75" 
              src="/assets/images/sanctu-compu-logo.svg" 
              alt="sanctuary computer logo"
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;
