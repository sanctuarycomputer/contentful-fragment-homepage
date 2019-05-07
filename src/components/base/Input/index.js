import React, {Component, Fragment} from 'react';

import cx from 'classnames';

class Input extends Component {
  constructor() {
    super()

    this.inputRef = React.createRef();
  }

  state = {
    inputValueIsCopied: false
  }

  componentDidMount() {
    if (this.props.copyIsAvailable) {
      window.addEventListener('copy', this.setInputValueCopyStatus);
    }
  }

  handleCopy = () => {
    const input = this.inputRef.current;

    input.select();
    document.execCommand("copy");

    //deselect input
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    };
  }

  setInputValueCopyStatus = () => {
    navigator.clipboard.readText().then(text => {
      if ( text === this.inputRef.current.value ) {
        return this.setState({inputValueIsCopied: true});
      }

      return this.setState({inputValueIsCopied: false});
    });
  }
  
  render() {
    const { title, inputValue, copyIsAvailable, inputIsFullWidth } = this.props;

    return (
      <div className="Input my2 flex flex-row items-center">
        <input className={cx(
          "Input__container border-color-dark-blue px1", 
          {
            'w100': inputIsFullWidth
          })} 
          value={inputValue}
          ref={this.inputRef}
          readOnly
        />
        {copyIsAvailable ? (
          <Fragment>
            <button className="Input__copy-button ml_75 up-hover" onClick={this.handleCopy}>
              <img className="Input__copy-icon" src="/assets/images/copy-icon.svg" alt="copy the input value" />
            </button>
            <span className={cx("block-description bold color-green opacity-0 transition", {
              'Input__copy-indicator--active': this.state.inputValueIsCopied
            })}>Copied!</span>
          </Fragment>
        ) : null}
      </div>
    )
  }
};

export default Input;
