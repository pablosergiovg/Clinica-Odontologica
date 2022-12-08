import React, { useState } from "react";
import Card from "../Components/Card";
import { obtenerFavoritosDeStorage, eliminarDeFavorito } from "../Components/utils/metodosLocalStorage";
import { ContextGlobal } from "../Components/utils/global.context";
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favoritos, setFavoritos] = useState(obtenerFavoritosDeStorage())

  const {state} = useContext(ContextGlobal);

  const eliminarDeFavoritos = (odontologoID) => {
    const nuevosFavoritos = favoritos.filter(odontologo => odontologo.id !== odontologoID.id)
    setFavoritos(nuevosFavoritos)
  }

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}

        {favoritos.length ? favoritos.map(odontologo => 
          ( <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />
        )
        ) : null }

        <button onClick={() => eliminarDeFavoritos(odontologo.id)}>🐭</button>

        {/* state.data.map((odontologos) => <Card key={odontologos.id} name={odontologos.name} username={odontologos.username} id={odontologos.id} />) */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
