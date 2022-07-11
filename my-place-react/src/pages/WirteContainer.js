import React from "react";
import Nav from "../components/Nav";

export default function WriteContainer({ addContents }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const title = event.target[0].value;
    const address = event.target[1].value;
    const content = event.target[2].value;
    addContents({ title, address, content });
    alert("성공");
  };
  return (
    <>
      <div class="inner">
        <div class="write-container">
          <h2>글쓰기페이지</h2>
          <form class="write-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="제목" />
            <input type="text" placeholder="장소" />
            <textarea type="text" placeholder="글내용" />
            <select>
              <option>Food</option>
              <option>Photo</option>
              <option>HotPlace</option>
              <option>Stationery</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
