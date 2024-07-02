// src/ColorPicker.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
};

ColorPicker.propTypes = {
  initialColor: PropTypes.string,
};

ColorPicker.defaultProps = {
  initialColor: '#000000',
};

export default ColorPicker;
