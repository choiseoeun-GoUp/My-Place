import React from "react";
import Nav from "../components/Nav";

export default function WriteContainer() {
  return (
    <>
      <div class="inner">
        <div class="write-container">
          <h2>글쓰기페이지</h2>
          <div class="write-form">
            <input type="text" placeholder="제목" />
            <input type="text" placeholder="장소" />
            <input type="text" placeholder="글내용" />
            <input type="button" value="글쓰기" />
          </div>
        </div>
      </div>
    </>
  );
}
