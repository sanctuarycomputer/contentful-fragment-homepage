import React, { PureComponent } from 'react';

import Urls from 'constants/Urls';

class Nav extends PureComponent {
  render() {
    return (
      <div className="Nav w100 px1_75 md:px4">
        <div className="Nav__container block-width mxauto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <a href={Urls.contentful} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <img className="Nav__logo w100 my_5" 
              src="/assets/images/evil-contentful-fragment-logo.svg" 
              alt="contentful fragment logo"
            />
          </a>
          <span className="Nav__santu-link color-white text-center md:text-start">
            By
            <a className="Nav__link transition"
              href={Urls.sanctuaryComputer}
              rel="noopener noreferrer" 
              target="_blank">
              Sanctuary Computer
            </a> 
            in NYC
          </span>
        </div>
      </div>
    )
  }
}

export default Nav;
