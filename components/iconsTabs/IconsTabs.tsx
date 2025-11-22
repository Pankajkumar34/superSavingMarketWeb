import React from "react";
import Image from "next/image";

import { IconItem } from "@/app/types/iconsTabs";
import { useRouter } from "next/navigation";
const icons: IconItem[]= [
  { src: "/IconFolder/ProfileIcons.png", alt: "Profile Icon",  path:"/profile",  label: "Profile", },
  { src: "/IconFolder/MinistatementsIcons.png", alt: "Statements Icon",  path:"/statements",  label: "Statements" },
  { src: "/IconFolder/WidrwalIcons.png", alt: "Withdrawal Icon",  path:"/withdrawal",  label: "Withdrawal" },
  { src: "/IconFolder/SavingIcons.png", alt: "Saving Icon",  path:"/saving",  label: "Saving" },
  { src: "/IconFolder/OrderIcons.png", alt: "My Order Icon",  path:"/my-order",  label: "My Order" },
  { src: "/IconFolder/ServiceIcons.png", alt: "Services Icon",  path:"/Services",  label: "Services" },
  { src: "/IconFolder/SupportIcon.png", alt: "Support Icon",  path:"/Support",  label: "Support" },
  { src: "/IconFolder/MoreIcons.png", alt: "More Icon",  path:"/More",  label: "More.." },
];


const IconGrid = () => {
  const router = useRouter();
  return (
    <div className="row text-center g-3 mb-3">
      {icons.map(({ src, alt, label,path }, index) => (
        <div key={index} className="col-3 col-md-2 col-lg-2 cursor-pointer" onClick={()=>router.push(path)} >
          <div className="icon-box">
            <Image src={src} alt={alt} width={50} height={50} className="icon-img" />
            <p className="icon-text " >{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
