import React from "react";

import Image from "next/image";
import { Product } from "@/app/types/products";
type ProductCardsProps = {
  products: Product[];
};
const ProductCards: React.FC<ProductCardsProps> = ({ products }) => {
  return (
    <div className="container py-2">
      <div className="row g-3">
        {products.map(({ id, imageSrc, title, price, stock, rating, reviews }) => (
          <div key={id} className="col-6 col-lg-3">
            <div className="product-card">
              <div className="product-img">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
              <div className="product-details">
                <h5 className="product-title">{title}</h5>
                <div className="d-flex align-items-center">
                  <span className="product-price">₹{price}</span>
                  <span className="Stock ms-3">{stock}</span>
                </div>
                <div>
                  <span className="buy me-2">Buy Now</span>
                  <span className="buy">In List</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                  <span className="rating">{rating} ★</span>
                  <span className="reviews ms-2">{reviews} Reviews</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;


