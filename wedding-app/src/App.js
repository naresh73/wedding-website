import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Contact from "./Components/Contact/Contact";
import Couple from "./Components/Couple/Couple";
import Event from "./Components/Event/Event";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import NavBar from "./Components/Navbar/Navbar";
import OurLove from "./Components/OurLove/OurLove";

function App() {
  return (
    <div>
      <NavBar />
      <Couple />
      <ComingSoon />
      <OurLove />
      <Gallery />
      <Event/>
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
