"use client"

import Image from "next/image"
type CarouselImage = {
    id: number;
    src: string;
    alt: string;
};

const images: CarouselImage[] = [
    { id: 1, src: "/slider/sl1.jpg", alt: "CEO Image 1" },
    { id: 2, src: "/slider/sl2.jpg", alt: "CEO Image 2" },
    { id: 3, src: "/slider/sl3.jpg", alt: "CEO Image 3" },
];


const CrouselDesign = ({height}:any) => {
    return (
        <div id="infoBoxCarousel" className="carousel slide mb-3 d-block d-lg-block" data-bs-ride="carousel">
  {/* Carousel items go here */}
  <div className="carousel-inner">
    <div className="carousel">
      {images.map(({ id, src, alt }, index) => (
        <div key={id} className={`carousel-item${index === 0 ? " active" : ""}`}>
          <div
            className="bg-white border rounded-4 shadow-sm info-box"
            style={{ position: "relative", width: "100%", height:height ? height : "200px" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "cover", borderRadius: "1rem" }}
              priority={index === 0}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Responsive height adjustment */}
  <style jsx>{`
    @media (max-width: 767px) {
      .info-box {
        height: 120px !important;
      }
    }
  `}</style>
</div>


    )
}

export default CrouselDesign