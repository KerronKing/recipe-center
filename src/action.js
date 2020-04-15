import axios from 'axios';

const ADD = 'ADD';

const apiKey = '8efcbcb1d5694a4e8f6efe8954092370';

const addRecipe = recipe => {
  const request = axios({
    method: 'get',
    url: `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${recipe}`,
  });

  return {
    type: ADD,
    payload: request,
  };
};

export { addRecipe, ADD };
