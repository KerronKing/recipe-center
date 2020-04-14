import React from 'react';
import Proptypes from 'prop-types';

const Search = ({ onClick, onChange }) => (
  <form>
    <label htmlFor="recipe">
      Search recipe:
      <input
        type="text"
        id="recipe"
        name="recipe"
        onChange={onChange}
      />
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
  onChange: Proptypes.func.isRequired,
};

export default Search;
