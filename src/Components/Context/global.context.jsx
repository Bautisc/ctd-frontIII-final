import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [dentists, setDentists] = useState([]);
    const [dentistDetails, setDentistDetails] = useState(null);
    const urlDentists ="https://jsonplaceholder.typicode.com/users"

    useEffect(() => {

        axios(urlDentists)
            .then((res) => {
                setDentists(res.data)})
            .catch((err)  => console.log(err));
    }, []);
    const fetchDentistDetails = (id) => {
        if (id.startsWith(':id')) {
            const numericId = id.slice(3); // Elimina ':id' del principio para obtener solo el número

            console.log("El id es:" + id)
            const urlDentistsDetails = `https://jsonplaceholder.typicode.com/users/${numericId}`
            console.log('URL:', urlDentistsDetails);
            axios(urlDentistsDetails)
                .then((resDetails) => {
                    setDentistDetails(resDetails.data)
                    console.log('.then data:', resDetails.data);
                })
                .catch((err) => console.log(err));
        }
    };
  return (
    <ContextGlobal.Provider value={{dentists, setDentists, dentistDetails, fetchDentistDetails}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = ()  => useContext(ContextGlobal);
