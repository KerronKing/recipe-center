import ADD from './action';

const initialState = {
  recipe: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        recipe: action.payload.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
