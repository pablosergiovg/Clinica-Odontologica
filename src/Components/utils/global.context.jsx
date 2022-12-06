import { createContext, useEffect, useMemo, useReducer } from "react";
import axios from 'axios'

export const ContextGlobal = createContext(undefined);

export const initialState = {
  theme: "", 
  data: [], 
}

const reducerFunction = (state, action) => {
  switch(action.type){
    case "RESP":
      return {...state, data: action.payload}
    default:
      return state;
  }
}


const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducerFunction, initialState);


  //API 
  useMemo(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({type: 'RESP', payload: res.data})
    })
    .catch(error => console.error("Error", error))
  },[])

  //TEMASCOLORES 

  const store = {
    state,
    dispatch
  }

  return (
    <ContextGlobal.Provider value={store}>
      <div>
        {children}
      </div>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;