"use client";

import { useEffect } from "react";

const CarouselInit = () => {
  useEffect(() => {
  import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap: any) => {
    const infoBoxCarousel = document.getElementById("infoBoxCarousel");
    if (infoBoxCarousel) {
      new bootstrap.Carousel(infoBoxCarousel, {
        interval: 2500,
        ride: "carousel",
      });
    }
  });
}, []);


  return null;
};

export default CarouselInit;
