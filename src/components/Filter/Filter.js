import React from 'react';
import css from './Filter.module.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
