import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  const [inputValue, setInputValue] = useState(filter);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      className={s.filter}
      type="text"
      name="filter"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Search by Name"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
