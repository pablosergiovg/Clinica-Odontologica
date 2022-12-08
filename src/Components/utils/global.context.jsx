import { createContext, useEffect, useReducer, useMemo } from "react";
import axios from 'axios'
import { obtenerFavoritosDeStorage } from "./metodosLocalStorage";

export const ContextGlobal = createContext(undefined);

export const initialState = {
  theme: "", 
  data: [],
  favoritos: [],
  flag: true
}

const reducerFunction = (state, action) => {
  switch(action.type){
    case "RESP":
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
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducerFunction, initialState);


  //API 
  useMemo(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({type: "RESP", payload: res.data})
    })
    .catch(error => console.error("Error", error))
  },[])


  //FAVORITOS 
  useEffect(() => {
    const favoritos = obtenerFavoritosDeStorage();
    dispatch({type: "FAV", payload: favoritos})
  }, [state.flag])

  

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