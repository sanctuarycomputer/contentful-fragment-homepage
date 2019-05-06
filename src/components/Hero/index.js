import React, { PureComponent } from "react";
import cx from "classnames";

class Hero extends PureComponent {
  render() {
    return (
      <div className="Hero px1_75 lg:px4 bg-color-dark-blue flex items-center">
        <div className="w100 mxauto block-width w100 flex flex-col lg:flex-row items-center justify-center">
          <div className="Hero__content col-12 lg:col-6 py2 lg:pr4">
            <h2 className="block-title color-white bold text-center lg:text-left mb1">{this.props.title}</h2>
            <p className="Hero__description block-description color-gray text-center lg:text-left mb2 mx_5 lg:ml0 lg:mr3">{this.props.description}</p>
            <div className="Hero__button-container flex flex-row justify-center lg:justify-start">
              <button className="Hero__button cf-btn-primary shadow-hover px2_5 py_75 px_25">Installation</button>
              <a className="Hero__button Hero__github-button color-white shadow-hover px_75 py_75 px_25 flex flex-row items-center"
                href="https://github.com/sanctuarycomputer/contentful-fragment"
                rel="noopener noreferrer" 
                target="_blank"
              >
                <img className="Hero__github-logo" src="/assets/images/github-logo.png" alt="github-logo"/>
                Github
              </a>
            </div>
          </div>
          <div className="Hero__iframe-container relative col-12 lg:col-6 flex justify-center lg:items-center">
            <div className="Hero__iframe w100 bg-color-gray absolute"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
