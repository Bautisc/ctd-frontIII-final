import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/Context/global.context';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    const {id} = useParams();
    const {dentistDetails, fetchDentistDetails} = useContextGlobal();

    console.log('ID from useParams:', id);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    useEffect(() =>{
        fetchDentistDetails(id);
    }, [id])


  return (
    <>
            {dentistDetails ? (
                <>
                    <h1>Detail Dentist id: {dentistDetails.id}</h1>
                    <p>Name: {dentistDetails.name}</p>
                    <p>Username: {dentistDetails.username}</p>
                    <p>Email: {dentistDetails.email}</p>
                    <p>Phone: {dentistDetails.phone}</p>
                    <p>Website: {dentistDetails.website}</p>
                </>
            ) : (
                    <p>Loading...</p>
                )}
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
