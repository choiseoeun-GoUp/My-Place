import React, { useRef, useState } from "react";
import SearchPlace from "./SearchPlace";

export default function WriteContainer({ addContents }) {
  const [isValid, setIsValid] = useState(false);

  const titleRef = useRef();
  const addressRef = useRef();
  const contentRef = useRef();

  const formValidation = () => {
    if (
      titleRef.current.value &&
      addressRef.current.value &&
      contentRef.current.value
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
    };
    addContents(newContent);
    titleRef.current.value = "";
    addressRef.current.value = "";
    contentRef.current.value = "";
    alert("성공");
    setIsValid(false);
    <SearchPlace />;
  };
  return (
    <>
      <div class="inner">
        <div class="write-container">
          <h2>글쓰기페이지</h2>
          <form class="write-form" onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              onChange={formValidation}
              type="text"
              placeholder="제목"
            />
            <input
              ref={addressRef}
              onChange={formValidation}
              type="text"
              placeholder="장소"
            />
            <textarea
              ref={contentRef}
              onChange={formValidation}
              type="text"
              placeholder="글내용"
            />
            <select>
              <option>Food</option>
              <option>Photo</option>
              <option>HotPlace</option>
              <option>Stationery</option>
            </select>
            <input
              type="submit"
              value="submit"
              disabled={isValid ? false : true}
            />
          </form>
        </div>
      </div>
    </>
  );
}
