import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from "../assets/hainis.jpg";
import banner2 from "../assets/hainisTecnology.jpg";
import banner3 from "../assets/haiTecnology.jpg";
import {ReactTyped} from "react-typed";

// Define the ExampleCarouselImage component directly within this file
const ExampleCarouselImage = ({ imageSrc, text }) => (
  <img
    className="d-block w-100"
    src={imageSrc}
    alt={text}
    style={{ objectFit: 'cover', height: '600px' }} // Adjust height as needed
  />
);

function Carrousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage 
          imageSrc={banner}
          text="First slide" />
        <Carousel.Caption >
          <h3>
            <ReactTyped
              strings={["Desenvolvendo soluções inteligentes para um mundo em constante evolução.", "Pioneiros em tecnologia, dedicados a impulsionar o seu negócio.", "Desenvolvendo soluções inteligentes para um mundo em constante evolução."]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage 
          imageSrc={banner2}
          text="Second slide" />
        <Carousel.Caption>
          <h3>
            <ReactTyped
            strings={["Capacitando empresas com tecnologia avançada e estratégia visionária.", "Tecnologia de ponta para resultados impressionantes.", "Conectando ideias e inovação para criar soluções impactantes."]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="/>"
            showCursor={true}
            />
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage 
          imageSrc={banner3}
          text="Third slide" />
        <Carousel.Caption>
          <h3>HAISYSTEMS</h3>
          <p><b>
            <ReactTyped 
            strings={["Onde a inovação encontra a excelência: soluções tecnológicas sob medida.","Sua jornada tecnológica começa aqui: inovação e qualidade em cada projeto.","Deixe-nos levar sua empresa ao próximo nível com nossa expertise em tecnologia."]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar="/>"
            showCursor={false}
            />
            </b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
