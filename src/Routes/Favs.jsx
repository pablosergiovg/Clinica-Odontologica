import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { obtenerFavoritosDeStorage } from "../Components/utils/metodosLocalStorage";

const Favs = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  useEffect(() => {
    const favoritos = obtenerFavoritosDeStorage();
    dispatch({type: "FAV", payload: favoritos})
  }, [dispatch, state.flag])
  
  return (
    <>
      <h1>Odontólogos Favoritos</h1>
      <div className="card-grid">
        {state.favoritos.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />)}
      </div>
    </>
  );
};

export default Favs;
