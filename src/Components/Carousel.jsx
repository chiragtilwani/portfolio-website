import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(props) {
  return (
    <Carousel fade controls={false} indicators={false} >
      {props.images.map((img) => (
        <Carousel.Item >
          <img className="d-block w-100" src={img} alt='' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
