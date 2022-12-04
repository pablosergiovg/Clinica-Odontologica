import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.setItem("nombre", "Deberan estar los datos de la card para después leer localstorage en favoritos")
    alert("Dentista agregado a favoritos")
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle*/}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <img src="images/doctor.jpg" alt="foto_dentista" />
      
      <Link to={"/dentist/:id"}>Name</Link>

      <p>Username</p>
      
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
