// SearchPlace.js

import React, { useState } from "react";
import { Contents } from "../components/Contents";
import MapContainer from "../components/MapContainer";

const SearchPlace = ({ contents, deleteContents }) => {
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
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={place} contents={contents} />
      <Contents contents={contents} deleteContents={deleteContents} />
    </>
  );
};

export default SearchPlace;
