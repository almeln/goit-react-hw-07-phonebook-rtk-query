import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {

  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
