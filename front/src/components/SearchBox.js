// SearchPlace.js
import "./Map.css";

import React, { useState } from "react";
import MapContainer from "./MapContainer";

const SearchPlace = ({ contents }) => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText(""); // 다시 비워주기
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
          type="text"
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={place} contents={contents} />
    </>
  );
};

export default SearchPlace;
