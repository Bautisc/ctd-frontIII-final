import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "./Utils/routes";
import { useContextGlobal } from "./Context/global.context";


const Card = ({ name, username, id }) => {
    const {dispatch} = useContextGlobal();
    const dentist = {name, username, id}
    const location = useLocation();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
        dispatch({type:"ADD_FAVS", payload:dentist})
  }
  const removeFav = () => {
    dispatch({type:"REMOVE_FAVS", payload:dentist});
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

            <Link to={routes.dentist + id}>
                <img src="../images/doctor.jpg" alt='dentist-logo' />
                <h3>{name}</h3>
                <h3>{username}</h3>
            </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            {location.pathname == "/home" && (
                    
                <button onClick={addFav} className="favButton">Add fav</button>
                )

            }
            {location.pathname === "/favs" && (
                <button onClick={removeFav} className="favButton">
                    Remove fav
                </button>
            )}
    </div>
  );
};

export default Card;
