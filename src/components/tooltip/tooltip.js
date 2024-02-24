import React from 'react';
import PropTypes from "prop-types";
import './tooltip.scss';

const  Tooltip=(props)=> {
  const { text, children } = props;
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}


Tooltip.propTypes = {
    text:PropTypes.string.isRequired
}
export default Tooltip;