import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const {dispatch, state} = useContext(ContextGlobal)

  const cambiarTema = () => {
    dispatch({type: "THEME", payload: state.theme === "light" ? "dark" : "light"})
  }

  return (
    <div className='nav-container'>
      <h1 className='nav-item-title'><span>D</span>H Odonto</h1>
      <nav>
        <div className='hamburguesa'>
          <Link to={"/"} >Home</Link>
          <Link to={"/contact"} >Contacto</Link>
          <Link to={"/favs"} >Favoritos</Link>
        </div>
        <div id="hamburguesaToggle">
          <input type="checkbox" />
          <MenuIcon/>
          <div id="menu">
            <Link to={"/"} >Home</Link>
            <Link to={"/contact"} >Contacto</Link>
            <Link to={"/favs"} >Favoritos</Link>
          </div>
        </div>
        <button onClick={cambiarTema}>{state.theme === "light" ? "🌙" : "🌞"}</button>
      </nav>
    </div>
  )
}

export default Navbar