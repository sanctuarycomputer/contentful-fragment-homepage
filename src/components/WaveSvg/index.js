import React, { PureComponent } from 'react';
import get from "utils/get";

class WaveSvg extends PureComponent {
  render() {
    const { props } = this;
    const flip = get(props, 'flip', false);
    const isGreyBackground = get(props, 'isGreyBackground', false);
    const className = get(props, 'className', '');

    if (flip) {
      return (
        <div className={className}>
          <svg viewBox="0 0 1440 125" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(720.000000, 62.625000) scale(-1, -1) translate(-720.000000, -62.625000) ">
              <path 
                fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
                d="M1440,0.54 L1440,52.665 C1168.0275,97.692 920.40225,94.317 697.125,42.54 C424.37475,-20.7105 192,6.6105 0,124.50075 L0.75,0.54 L1440,0.54 Z" 
                transform="translate(720.000000, 62.520375) rotate(180.000000) translate(-720.000000, -62.520375) "></path>
              <path 
                d="M0,124.5 L0,71.25 C201.77475,18.42 452.64975,21.42 752.625,80.25 C1119.75,152.25 1440,0.53925 1440,0.53925 L1439.25,124.5 L0,124.5 Z" 
                fillOpacity="0.3" 
                fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
                fillRule="nonzero"></path>
              <path 
                d="M0,125.0625 L0,71.25 C279.08625,0.162 528.21075,-6.71325 747.375,50.625 C1021.62525,122.37525 1252.5,105.6795 1440,0.53925 L1439.25,125.0625 L0,125.0625 Z" 
                fillOpacity="0.3" 
                fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
                fillRule="nonzero"></path>
              <path 
                d="M0,124.5 L0,74.25 C299.49975,-3.99975 557.37525,-17.25 773.625,34.5 C1098,112.125 1339.125,48.91425 1440,0.53925 L1439.25,125.0625 L0,124.5 Z" 
                fillOpacity="0.35" 
                fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
                fillRule="nonzero"></path>
            </g>
          </svg>
        </div>
      )
    }
    
    return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 170">
          <g 
            fill="none"
            transform={flip ? "translate(720.000000, 62.625000) scale(1, -1) translate(-720.000000, -62.625000)" : null}
          >
            <path 
              d="M1920 4.719v69.5c-362.63 60.036-692.797 55.536-990.5-13.5C565.833-23.615 256 12.813 0 170L1 4.719h1919z"
              transform="rotate(180 960.5 87.36)"
              fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
            />
            <path
              d="M1 170V99c269.033-70.44 603.533-66.44 1003.5 12C1494 207 1921 4.719 1921 4.719L1920 170H1z"
              fillOpacity=".3"
              fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
            />
            <path
              d="M1 170.75V99C373.115 4.216 705.281-4.951 997.5 71.5c365.667 95.667 673.5 73.406 923.5-66.781l-1 166.031H1z"
              fillOpacity=".3"
              fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
            />
            <path
              d="M1 170v-67C400.333-1.333 744.167-19 1032.5 50c432.5 103.5 754 19.219 888.5-45.281l-1 166.031L1 170z"
              fillOpacity=".35"
              fill={isGreyBackground ? "#F7F7F7" : "#FFF"}
            />
          </g>
      </svg>
    </div>
    )
  }
}

export default WaveSvg;



