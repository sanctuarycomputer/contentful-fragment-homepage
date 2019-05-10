import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <div className="Footer w100 px1_75 md:px4 bg-color-dark-blue flex flex-col items-center justify-center">
        <p className="block-description color-white text-center">
          by NYC based Contentful experts
        </p>
        <img className="Footer__sc-logo w100 mt_75" 
          src="/assets/images/sanctu-compu-logo.svg" 
          alt="sanctuary computer logo"
        />
      </div>
    )
  }
}

export default Footer;