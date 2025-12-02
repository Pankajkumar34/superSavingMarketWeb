"use client";

import React from "react";
import { useLocation } from "@/utils/hooks/useLocation";

const AllowLocationButton = ({ onSuccess }: { onSuccess: Function }) => {
  const { getLocation, loading, location } = useLocation();

  const handleClick = async () => {
    await getLocation();

    // When location fetched, call parent callback
    setTimeout(() => {
      if (location) {
        console.log(location,"locationlocation")
        onSuccess(location);
      }
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      {loading ? "Fetching..." : "Allow Location"}
    </button>
  );
};

export default AllowLocationButton;
