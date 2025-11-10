"use client";

import React from "react";
import Image from "next/image";

interface SocialButtonProps {
  icon: any; // path to icon e.g. /icons/google.png
  label: string; // e.g. "Continue with Google"
  onClick:any;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-100 border d-flex align-items-center justify-content-center mb-2 rounded-pill shadow-sm"
      style={{
        background: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <Image
        src={icon}
        alt={label}
        width={22}
        height={22}
        className="me-2"
      />
      <span className="text-muted fw-semibold">{label}</span>
    </button>
  );
};

export default SocialButton;
