import React, { useState } from "react";
import { Container, Image, Carousel } from "react-bootstrap";
import { images } from "../data/imagesgallery";

export default function GalleryMedia({ id }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const isMobile = window.innerWidth < 767;

  return (
    <Container id={id}>
      {isMobile && (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.length > 0 &&
            images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <Image
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
                <Carousel.Caption>
                  <span className="decoro">{image.welcome}</span>
                  <h1 className="titolo">{image.title}</h1>
                  <h3 className="testo">{image.text}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </Container>
  );
}
