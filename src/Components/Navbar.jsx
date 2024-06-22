import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './Utils/routes'
import { useContextGlobal } from './Context/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const {state, dispatch} = useContextGlobal();
    const {theme} = state

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        dispatch({ type: "TOGGLE_THEME", payload: newTheme });
    };
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
            <Link to={routes.home}> 
                <h4>Home</h4>
            </Link>
            <Link to={routes.favs}> 
                <h4>Favs</h4>
            </Link>
            <Link to={routes.contact}> 
                <h4>Contact</h4>
            </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} className='changeTheme'>Change to {theme === "light" ? "dark" : "light"} theme</button>
    </nav>
  )
}

export default Navbar
