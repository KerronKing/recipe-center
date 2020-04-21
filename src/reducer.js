import React, { useReducer } from 'react';
import Proptypes from 'prop-types';
import ADD from './action';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

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

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default GlobalContextProvider;
