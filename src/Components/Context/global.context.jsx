import axios from "axios";
import { useReducer } from "react";
import { createContext, useContext, useEffect} from "react";

export const initialState = {theme:JSON.parse(localStorage.getItem("theme")) || "light", data: [], dentistDetails:null, favDentist: JSON.parse(localStorage.getItem("favs")) || [] }

export const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_DENTISTS":
            return {...state, data: action.payload}
        case "FETCH_DETAILS":
            return {...state, dentistDetails: action.payload}
        case "ADD_FAVS":
            const updateFavs = [...state.favDentist, action.payload ]
            localStorage.setItem("favs", JSON.stringify(updateFavs));
            return {...state, favDentist: updateFavs}
        case "REMOVE_FAVS":
            const filteredFavs = state.favDentist.filter((fav) => fav.id !== action.payload.id)
            localStorage.setItem("favs", JSON.stringify(filteredFavs));
            return {...state, favDentist: filteredFavs}
        case "TOGGLE_THEME":
            return { ...state, theme: action.payload };
        default:
            return state
    }
}
export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const [state, dispatch] = useReducer(reducer,initialState)

    // useEffect para el manejo del theme..
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem("theme", JSON.stringify(state.theme));
    }, [state.theme]);


    // Llamado principal a la API.
    const urlDentists ="https://jsonplaceholder.typicode.com/users"
    useEffect(() => {

        axios(urlDentists)
            .then((res) => {
                dispatch({type: "FETCH_DENTISTS", payload: res.data})})
            .catch((err)  => console.log(err));
    }, []);

    //Llamado a la API con ruta dinamica..
    const fetchDentistDetails = (id) => {
        if (id.startsWith(':id')) {
            const numericId = id.slice(3); // No se porque me daba tanto problema el :id, me lo pasaba talcual :id y el id pegado i.e :id1
            console.log("El id es:" + id)
            const urlDentistsDetails = `https://jsonplaceholder.typicode.com/users/${numericId}`
            console.log('URL:', urlDentistsDetails);
            axios(urlDentistsDetails)
                .then((resDetails) => {
                    dispatch({type:"FETCH_DETAILS", payload:resDetails.data})
                    console.log('.then data:', resDetails.data);
                })
                .catch((err) => console.log(err));
        }
    };


    return (
        <ContextGlobal.Provider value={{state, dispatch, fetchDentistDetails}}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useContextGlobal = ()  => useContext(ContextGlobal);
