import React, { useState } from "react";
import EditModal from "../Modal/EditModal";

export const Content = ({ contents, deleteContents, editContents }) => {
  const { id, title, address, content, createdAt } = contents;
  // console.log(contents);

  return (
    <li>
      <div>{id}</div>
      <div>{title}</div>
      <div>{address}</div>
      <div>{content}</div>
      <div>{createdAt}</div>
      <button onClick={() => deleteContents(contents.id)}>삭제</button>
      <button
        onClick={() => (
          <EditModal contents={contents} editContents={editContents} />
        )}
      >
        수정
      </button>
    </li>
  );
};
