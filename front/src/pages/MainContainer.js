// SearchPlace.js

import "./Main.css";

import React, { useState } from "react";
import { Contents } from "../components/Contents";
import SearchBox from "../components/SearchBox";

const MainContainer = ({ contents, deleteContents, editContents }) => {
  const [content, setContents] = useState(contents);
  const [filteredContents, setFilteredContents] = useState(contents);
  const [isFiltered, setIsFiltered] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("default");

  const handleFilterContent = (event) => {
    if (event.target.value === "default") {
      setContents(content);
      setIsFiltered(false);
    } else {
      const filtered = contents.filter(
        (contents) => contents.category === event.target.value
      );
      setIsFiltered(true);
      setFilteredContents(filtered);
    }
    setCurrentCategory(event.target.value);
  };
  console.log(contents.id);

  return (
    <>
      <section className="MainContainer">
        <select value={currentCategory} onChange={handleFilterContent}>
          <option value="default">-- category --</option>
          {contents
            .reduce((acc, cur) => {
              const isNotUnique = acc.reduce((a, c) => {
                if (c.category === cur.category) {
                  return true;
                }
                return a === true ? true : false;
              }, false);

              return isNotUnique ? acc : [...acc, cur];
            }, [])
            .map((content) => {
              return (
                <option key={content.id} value={content.category}>
                  {content.category}
                </option>
              );
            })}
        </select>
      </section>
      <div className="mapBox">
        <SearchBox contents={isFiltered ? filteredContents : contents} />
      </div>

      <Contents
        contents={isFiltered ? filteredContents : contents}
        deleteContents={deleteContents}
        editContents={editContents}
      />
    </>
  );
};

export default MainContainer;
