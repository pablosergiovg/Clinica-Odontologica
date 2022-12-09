import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setFavoritosStorage, eliminarDeFavorito, esFavorito} from "./utils/metodosLocalStorage";


const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContext(ContextGlobal);

  const addFav = ()=>{
    dispatch({type: "FLAG", payload: !state.flag})
    if(!esFavorito(id)) {
      setFavoritosStorage({name, username, id});
    } else {
      eliminarDeFavorito(id, name)
    }
  }

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="foto_dentista" />
      <Link to={`/dentist/${id}`} data={state.data}>{name}</Link>
      <p>{username}</p>
      <button onClick={addFav} className="favButton" >{esFavorito(id) ? "💗" : "🤍"}</button>
    </div>
  );
};

export default Card;