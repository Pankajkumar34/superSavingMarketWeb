
"use client";

import ProductCards from "@/components/cardProduct/ProductCard";
import CrouselDesign from "@/components/carousel/CarouselDesign"
import SearchWithSelect from "@/components/filter/FilterDesgin"
import IconGrid from "@/components/iconsTabs/IconsTabs"

import { Product } from "@/types/products";
import { useSession } from "next-auth/react";
const productsData: Product[] = [
  {
    id: 1,
    imageSrc: "/productImg/cockingoil.jpg",
    title: "Charvi Sensational Kurtis",
    price: 277,
    stock: "10Pc. Left",
    rating: 4.1,
    reviews: 1014,
  },
  {
    id: 2,
    imageSrc: "/productImg/DalProcuct.jpg",
    title: "Charvi Sensational Kurtis",
    price: 277,
    stock: "10Pc. Left",
    rating: 4.1,
    reviews: 1014,
  },
  {
    id: 3,
    imageSrc: "/productImg/sugar.webp",
    title: "Charvi Sensational Kurtis",
    price: 277,
    stock: "10Pc. Left",
    rating: 4.1,
    reviews: 1014,
  },
  {
    id: 4,
    imageSrc: "/productImg/surfExcle.webp",
    title: "Charvi Sensational Kurtis",
    price: 277,
    stock: "10Pc. Left",
    rating: 4.1,
    reviews: 1014,
  },
];
const HomeContainer = () => {
  const { data: session } = useSession();
  console.log(session,"datadata")
  return (
    <div className="mx-auto inner-dashboard">
      <CrouselDesign />
      <IconGrid />
      <SearchWithSelect />
      <ProductCards products={productsData} />
    </div>
  )
}

export default HomeContainer