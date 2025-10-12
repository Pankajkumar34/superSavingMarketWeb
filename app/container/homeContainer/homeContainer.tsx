import ProductCards from "@/app/components/cardProduct/ProductCard";
import CrouselDesign from "@/app/components/carousel/CarouselDesign"
import SearchWithSelect from "@/app/components/filter/FilterDesgin"
import IconGrid from "@/app/components/iconsTabs/IconsTabs"

import { Product } from "@/app/types/products";
const productsData:Product[]= [
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
const HomeContainer =()=>{
    return(
        <>  
        <CrouselDesign/>
        <IconGrid/>
        <SearchWithSelect/>
        <ProductCards products={productsData}/>
        </>
    )
}

export default HomeContainer