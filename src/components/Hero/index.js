import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import Urls from 'constants/Urls';
import WaveSvg from 'components/WaveSvg';

class Hero extends PureComponent {
  render() {
    return (
      <div className="Hero relative px1_75 lg:px4 flex flex-col justify-center items-center">
        <WaveSvg 
          className="Hero__container-bottom-image absolute"
          isGreyBackground={true}
        />
        <div className="w100 mxauto block-width w100 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="Hero__content lg:mt2 col-12 lg:col-6 py2 lg:pr4">
            <h2 className="block-title color-white bold text-center lg:text-left mb1_5">{this.props.title}</h2>
            <p className="Hero__description block-description color-white text-center lg:text-left mb2 mx_5 lg:ml0 lg:mr3">{this.props.description}</p>
            <div className="Hero__button-container flex flex-row justify-center lg:justify-start">
              <button className="Hero__button Hero__button-primary">Installation</button>
              <a className="Hero__button Hero__github-button color-white flex flex-row items-center"
                href={Urls.fragmentGithub}
                rel="noopener noreferrer" 
                target="_blank"
              >
                <img className="Hero__github-logo" src="/assets/images/github-logo.png" alt="github-logo"/>
                <span className="color-white">
                Github
                </span>
              </a>
            </div>
          </div>
          <div className="Hero__iframe-container relative col-12 lg:col-6 flex flex-col justify-center lg:items-center">
            <iframe 
              className="Hero__iframe w100 bg-color-light-blue-grey drop-shadow absolute l0 r0 t0 mauto"
              src="https://contentful-fragment.now.sh/dummy"
            />
          </div>
        </div>
      </div>
    );
  }
}


Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Hero.defaultProps = {
  title: '',
  description: ''
};

export default Hero;
