import React, { createContext, useReducer, useContext } from 'react';

export const initialState = {
  theme: 'light', // Valor inicial del tema
  data: [], // Valor inicial de la información de la API
};

export const GlobalContext = createContext(initialState);

export const SET_THEME = 'SET_THEME';
export const SET_DATA = 'SET_DATA';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const useGlobalState = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTheme = (theme) => {
    dispatch({ type: SET_THEME, payload: theme });
  };

  const setData = (data) => {
    dispatch({ type: SET_DATA, payload: data });
  };

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        data: state.data,
        setTheme,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
