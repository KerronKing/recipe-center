import React from 'react';
import Proptypes from 'prop-types';

const Search = ({ handleSubmit, handleChange }) => (
  <form
    onSubmit={handleSubmit}
  >
    <label htmlFor="recipe">
      Search recipe:
      <br />
      <input
        type="text"
        id="recipe-input"
        name="recipe"
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <label htmlFor="total">
      How many recipes do you wish to generate:
      <br />
      <input
        type="number"
        id="total"
        name="total"
        min="1"
        max="100"
        onChange={handleChange}
        required
      />
    </label>
    <br />
    <button
      type="submit"
    >
      Search
    </button>
  </form>
);

Search.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default Search;
