"use client";

import { useState } from "react";

export interface LocationData {
  latitude: number | null;
  longitude: number | null;
  address: {
    villageOrCity: string;
    postOffice: string;
    district: string;
    policeStation: string;
    state: string;
    region: string;
  };
}

export const useLocation = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<LocationData | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support geolocation.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        // Reverse Geo API (OpenStreetMap)
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        const add = data.address;

        setLocation({
          latitude,
          longitude,
          address: {
            villageOrCity: add.village || add.city || "",
            postOffice: add.postcode || "",
            district: add.county || "",
            policeStation: add.suburb || "",
            state: add.state || "",
            region: add.region || "",
          },
        });

        setLoading(false);
      },
      (err) => {
        alert("Location permission denied.");
        console.error(err);
        setLoading(false);
      }
    );
  };

  return { getLocation, loading, location };
};
