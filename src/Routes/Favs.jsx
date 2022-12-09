import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useContext(ContextGlobal)
  
  return (
    <>
      <h1>Odontologos Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {state.favoritos.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />)}

      </div>
    </>
  );
};

export default Favs;
