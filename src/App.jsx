
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/Utils/routes";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
          <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home />}/>
                <Route path={routes.favs} element={<Favs />}/>
                <Route path={routes.dentist} element={<Detail />}/>
                <Route path={routes.contact} element={<Contact />}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
