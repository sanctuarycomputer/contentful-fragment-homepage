import React, {Component, Fragment} from 'react';

import cx from 'classnames';

class Input extends Component {
  inputRef = React.createRef();

  state = {
    showCopySuccessIndicator: false
  }

  handleCopy = () => {
    this.inputRef.current.select();
    document.execCommand("copy");

    //deselect input
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    };

    this.setState({showCopySuccessIndicator: true});

    setTimeout(() => {
      this.setState({showCopySuccessIndicator: false})
    }, 1500);
  }
  
  render() {
    const { inputValue, copyIsAvailable } = this.props;

    return (
      <div className="Input my2 flex flex-row items-center">
        <input className={cx(
          "Input__container border-color-dark-blue px1", 
          {
            'Input__container--full-width': !copyIsAvailable
          })} 
          value={inputValue}
          ref={this.inputRef}
          readOnly
        />
        {copyIsAvailable ? (
          <Fragment>
            <button className="Input__copy-button ml_75 up-hover"
              onClick={this.handleCopy}
            >
              <img className="Input__copy-icon" 
                src="/assets/images/copy-icon.svg" 
                alt="copy the input value"
              />
            </button>
            <span className={cx("block-description bold color-green opacity-0 transition", {
              'Input__copy-indicator--active': this.state.showCopySuccessIndicator
            })}>Copied!</span>
          </Fragment>
        ) : null}
      </div>
    )
  }
};

export default Input;
