import React, { PureComponent } from 'react';

import WaveSvg from 'components/WaveSvg';

class Footer extends PureComponent {
  render() {
    const { contentBlocksCount } = this.props;

    return (
      <div className="Footer relative w100 px1_75 md:px4 block-background flex flex-col items-center justify-center">
        <WaveSvg 
          flip={true}
          className="Footer__container-bottom-image absolute"
          isGreyBackground={contentBlocksCount%2 === 0}
        />
        <p className="block-description color-white text-center mt4">
          by NYC based Contentful experts
        </p>
        <a 
          href="https://www.sanctuary.computer/"
          rel="noopener noreferrer" 
          target="_blank"
        >
          <img className="Footer__sc-logo w100 mt_75" 
            src="/assets/images/sanctu-compu-logo.svg" 
            alt="sanctuary computer logo"
          />
        </a>
      </div>
    )
  }
}

export default Footer;