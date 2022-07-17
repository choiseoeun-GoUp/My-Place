import React, { useEffect, useState } from "react";
import KakaoMapScript from "../api/KakaoMapScript";
import KakaoMapScriptCopy from "../api/KakaoMapScript copy";
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
        }}
      ></div>
    </>
  );
}
