import "./App.css";
import Couple from "./Components/Couple/Couple";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import WeddingEvents from "./Components/WeddingEvents";
import Gallery from './Components/Gallery'
import LoginPage from "./Pages/login";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <WeddingEvents />
          <Gallery />
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
