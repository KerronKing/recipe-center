const reducer = (state, action) => {
  // const apiEndpoint = 'https://api.spoonacular.com/recipes/search';

  switch (action.type) {
    case 'getRecipe':
      return {

      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
