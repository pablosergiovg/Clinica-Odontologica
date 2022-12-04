import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <div className='nav-container'>
      <h1 className='nav-item-title'><span>D</span>H Odonto</h1>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to={"/"} >Home</Link>
        <Link to={"/contact"} >Contact</Link>
        <Link to={"/favs"} >Favs</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>🌙</button>
      </nav>
    </div>
  )
}

export default Navbar