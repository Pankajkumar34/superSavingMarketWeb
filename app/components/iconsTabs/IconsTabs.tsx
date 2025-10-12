import React from "react";
import Image from "next/image";

import { IconItem } from "@/app/types/iconsTabs";
const icons: IconItem[]= [
  { src: "/IconFolder/ProfileIcons.png", alt: "Profile Icon", label: "Profile" },
  { src: "/IconFolder/MinistatementsIcons.png", alt: "Statements Icon", label: "Statements" },
  { src: "/IconFolder/WidrwalIcons.png", alt: "Withdrawal Icon", label: "Withdrawal" },
  { src: "/IconFolder/SavingIcons.png", alt: "Saving Icon", label: "Saving" },
  { src: "/IconFolder/OrderIcons.png", alt: "My Order Icon", label: "My Order" },
  { src: "/IconFolder/ServiceIcons.png", alt: "Services Icon", label: "Services" },
  { src: "/IconFolder/SupportIcon.png", alt: "Support Icon", label: "Support" },
  { src: "/IconFolder/MoreIcons.png", alt: "More Icon", label: "More.." },
];

const IconGrid = () => {
  return (
    <div className="row text-center g-3 mb-3">
      {icons.map(({ src, alt, label }, index) => (
        <div key={index} className="col-3 col-md-2 col-lg-2">
          <div className="icon-box">
            <Image src={src} alt={alt} width={50} height={50} className="icon-img" />
            <p className="icon-text">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
