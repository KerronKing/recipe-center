import React from 'react';
import Proptypes from 'prop-types';

const Search = ({ handleSubmit, handleChange }) => (
  <form>
    <label htmlFor="recipe">
      Search recipe:
      <input
        type="text"
        id="recipe"
        name="recipe"
        onChange={handleChange}
      />
    </label>
    <button
      type="submit"
      onSubmit={handleSubmit}
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
