import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { obtenerFavoritosDeStorage, setFavoritosStorage, eliminarDeFavorito, esFavorito} from "./utils/metodosLocalStorage";


const Card = ({ name, username, id }) => {

  const {state} = useContext(ContextGlobal);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    if(!esFavorito(id)) {
      setFavoritosStorage({name, username, id});
      // Cambiar el estilo del boton
    } else {
      eliminarDeFavorito(id, name)
    }

  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle*/}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img src="images/doctor.jpg" alt="foto_dentista" />
      
      <Link to={`/dentist/${id}`} data={state.data}>{name}</Link>

      <p>{username}</p>
      
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;