import React, { useEffect, useState } from "react";
import KakaoMapScript from "../api/KakaoMapScript";
import { Contents } from "./Contents";

export default function MapContainer({ searchPlace, contents }) {
  useEffect(() => {
    KakaoMapScript({ searchPlace, contents });
    // KakaoMapScriptCopy();
  }, [searchPlace, contents]);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "1140px",
          height: "500px",
          borderRadius: "30px",
        }}
      ></div>
    </>
  );
}
