import React from 'react';
import Proptypes from 'prop-types';

const Search = ({ onClick }) => (
  <form>
    <label htmlFor="recipe">
      Search recipe:
      <input type="text" id="recipe" name="recipe" />
    </label>
    <button
      type="submit"
      onClick={onClick}
    >
      Search
    </button>
  </form>
);

Search.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default Search;
