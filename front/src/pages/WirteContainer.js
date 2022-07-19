import React, { useRef, useState } from "react";
import SearchBox from "../components/SearchBox";
import "./write.css";

export default function WriteContainer({ contents, addContents }) {
  const [isValid, setIsValid] = useState(false);
  const [Selected, setSelected] = useState("");
  const selectList = ["Food", "Photo", "HotPlace", "Stationery"];

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const titleRef = useRef();
  const addressRef = useRef();
  const contentRef = useRef();

  const formValidation = () => {
    if (
      titleRef.current.value &&
      addressRef.current.value &&
      contentRef.current.value &&
      Selected
    ) {
      setIsValid(true);
    } else setIsValid(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContent = {
      title: titleRef.current.value,
      address: addressRef.current.value,
      content: contentRef.current.value,
      category: Selected,
      createdAt: new Date().toLocaleString(),
    };
    addContents(newContent);
    titleRef.current.value = "";
    addressRef.current.value = "";
    contentRef.current.value = "";
    setSelected("");
    alert("성공");
    setIsValid(false);
    // <SearchPlace />;
  };

  return (
    <>
      <section className="MainContainer"></section>
      <div className="mapBox">
        <SearchBox contents={contents} />
      </div>
      <div class="inner">
        <form class="write-form" onSubmit={handleSubmit}>
          <ul class="write-container">
            <li className="row">
              <select onChange={handleSelect} value={Selected}>
                <option>카테고리를 선택해 주세요</option>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </li>
            <li className="row">
              <label for="inputTitle">Title :</label>
              <input
                ref={titleRef}
                onChange={formValidation}
                type="text"
                placeholder="제목"
                id="inputTitle"
              />
            </li>
            <li className="row">
              <label for="inputAddress">Address :</label>
              <input
                ref={addressRef}
                onChange={formValidation}
                type="text"
                placeholder="장소"
              />
            </li>
            <li className="row">
              <label for="inputTitle">Content :</label>
              <textarea
                ref={contentRef}
                onChange={formValidation}
                type="text"
                placeholder="글내용"
              />
            </li>
            <li className="row">
              <button
                type="submit"
                value="submit"
                disabled={isValid ? false : true}
              >
                SUBMIT
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
