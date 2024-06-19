import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [dentists, setDentists] = useState([]);
    const [dentistDetails, setDentistDetails] = useState([]);
    const urlDentists ="https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        axios(urlDentists)
            .then((res) => {
                setDentists(res.data)})
            .catch((err)  => console.log(err));
    }, []);
    const fetchDentistDetails = (id) => {
        const urlDentistsDetails =`https://jsonplaceholder.typicode.com/users/${id}`
        axios(urlDentistsDetails)
            .then((resDetails) => {
                console.log(resDetails)
            })
            .catch((err) => console.log(err));
    }
  return (
    <ContextGlobal.Provider value={{dentists, setDentists, dentistDetails, fetchDentistDetails}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = ()  => useContext(ContextGlobal);
