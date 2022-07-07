import React, { useEffect } from "react";
import KakaoMapScript from "../api/KakaoMapScript";

export default function MapContainer({ searchPlace }) {
  useEffect(() => {
    KakaoMapScript({ searchPlace });
  }, [searchPlace]);

  return (
    <div
      id="myMap"
      style={{
        width: "1140px",
        height: "500px",
      }}
    ></div>
  );
}
