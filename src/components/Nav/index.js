import React, { PureComponent } from 'react';
import cx from 'classnames';

class Nav extends PureComponent {
  render() {
    return (
      <div className="Nav w100 px1_75 md:px4 bg-color-dark-blue">
        <div className="Nav__container mxauto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <a className="Nav__logo-container" 
            href="https://www.contentful.com/" 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <img className="w100 my_5" 
              src="/assets/images/contentful-fragment-logo.svg" 
              alt="contentful fragment logo"
            />
          </a>
          <span className="block-description color-white">
            By
            <a className="Nav__link transition"
              href="http://www.sanctuary.computer/" 
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