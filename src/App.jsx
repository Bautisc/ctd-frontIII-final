
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/Utils/routes";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/Context/global.context";


function App() {
    const {state} = useContextGlobal();
    const {theme} = state;



  return (
      <div className="App">
          <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home />}/>
                <Route path={routes.favs} element={<Favs />}/>
                <Route path={routes.dentist} element={<Detail />}/>
                <Route path={routes.contact} element={<Contact />}/>
                <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
