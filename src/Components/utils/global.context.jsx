import { createContext, useReducer } from "react";
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, green, red, grey} from "@mui/material/colors";

export const ContextGlobal = createContext(undefined);

export const initialState = {
  theme: "light", 
  data: [],
  favoritos: [],
  flag: true
}

const reducerFunction = (state, action) => {
  switch(action.type){
    case "THEME":
      return {...state, theme: action.payload}
    case "DATA":
      return {...state, data: action.payload}
    case "FAV":
      return {...state, favoritos: action.payload}
    case "FLAG":
      return {...state, flag: action.payload}
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const theTheme = createTheme({
    palette:{
      primary: {
        main: state.theme === "light" ? blue[500] : grey[50]
      },
      secondary:{
        main: green[300]
      },
      error:{
        main: state.theme === "light" ? red[500] : red[200]
      },
      success:{
        main: green[100]
      },
    }
  });

  const store = {
    state,
    dispatch
  }

  return (
    <ContextGlobal.Provider value={store}>
      <ThemeProvider theme={theTheme}>
      <div className={state.theme}>
        {children}
      </div>
      </ThemeProvider>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;