import React, { useEffect } from "react";
import KakaoMapScript from "../api/KakaoMapScript";

export default function MapContainer({ searchPlace, contents }) {
  useEffect(() => {
    KakaoMapScript({ searchPlace, contents });
  }, [searchPlace, contents]);

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
