import './App.css';
import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from './components/Carrousel';
import About from './components/About';
import AboutTitle from './components/AboutTitle';
import ServicesTitle from './components/ServicesTitle';
import Services from './components/Services';
import Footer from './components/Footer';
import ProductsTitle from './components/ProductsTitle';
import FooterEnd from './components/FooterEnd';


function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    // Function to handle mouse movements
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      // Adjust position by viewport offsets
      cursor.style.top = (y) + "px";
      cursor.style.left = (x) + "px";
      cursor.style.display = "block";

      // Function to hide the cursor if mouse stops
      const mouseStopped = () => {
        cursor.style.display = "none";
      };

      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    };

    // Event listeners for mouse movements and mouseout
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", () => {
        cursor.style.display = "none";
      });
    };
  }, []);

  return (
    <div className="App">
      <NavBar />      
      <Carrousel />
      <p></p>
      <AboutTitle />
      <About />   
      <header className="App-header">
        <p></p>
        <ServicesTitle />
        <p></p>
        <Services />
        <p></p>
      </header> 
      <div className='App-products'>
        <p></p>
          <ProductsTitle />
        <p></p>
      </div>
      <Footer />
      <FooterEnd />
      <div className="cursor"></div>
    </div>
  );
}

export default App;
