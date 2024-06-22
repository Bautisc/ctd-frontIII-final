import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    const {state} = useContextGlobal();
    const {favDentist} = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
                {favDentist.map((dentist) => (
                    <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id}/>
                ))}

            </div>
    </>
  );
};

export default Favs;
