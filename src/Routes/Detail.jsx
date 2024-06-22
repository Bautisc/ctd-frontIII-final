import React, { useEffect } from 'react'
import { useContextGlobal } from '../Components/Context/global.context';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    const {state, fetchDentistDetails} = useContextGlobal();
    const {dentistDetails} = state;

    const {id} = useParams();
    console.log('ID from useParams:', id);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    useEffect(() =>{
        fetchDentistDetails(id);
    }, [id])


  return (
    <>
            {dentistDetails ? (
                <div className='dentistDetails'>
                    {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
                    {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
                    <h1>Detail Dentist Nro: {dentistDetails.id}</h1>
                    <img src="../images/doctor.jpg" alt=""/>
                    <p>Name: {dentistDetails.name}</p>
                    <p>Username: {dentistDetails.username}</p>
                    <p>Email: {dentistDetails.email}</p>
                    <p>Phone: {dentistDetails.phone}</p>
                    <p>Website: {dentistDetails.website}</p>
                </div>
            ) : (
                    <p>Loading...</p>
                )}
    </>
  )
}

export default Detail
