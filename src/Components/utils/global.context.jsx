import { useState, createContext, useEffect, useMemo } from "react";
import axios from 'axios'

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [odontologos, setOdontologos] = useState([])
  
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     setOdontologos(res.data)
  //     console.log(res.data);
  //   })
  //   .catch(error => console.error("Error", error))
  // }, [])

  useMemo(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setOdontologos(res.data)
      console.log(res.data);
    })
    .catch(error => console.error("Error", error))
  }, [])

  const store = {
    odontologos
  }

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};
