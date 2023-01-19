import { useSelector } from "react-redux";
import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Contact from "./Components/Contact/Contact";
import Couple from "./Components/Couple/Couple";
import Event from "./Components/Event/Event";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import NavBar from "./Components/Navbar/Navbar";
import OurLove from "./Components/OurLove/OurLove";
import LoginPage from "./Pages/login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GallerySection from "./Components/Additional/Sections";


function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={
          (isLoggedIn) ? 
          <div>
          <NavBar />
          <Couple />
          <ComingSoon />
          <OurLove />
          <Gallery />
          <GallerySection />
          <Event/>
          <Contact/>
          <Footer /> 
          </div>
          :
          <LoginPage />

      } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
