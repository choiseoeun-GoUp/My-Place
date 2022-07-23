import React, { useState } from "react";
import EditModal from "../Modal/EditModal";
import "./Content.css";

export const Content = ({ contents, deleteContents, editContents }) => {
  const { id, title, address, content, createdAt } = contents;
  console.log(contents.id);
  const [editModal, setEditModal] = useState(false);
  const handleEditModal = () => {
    setEditModal(!editModal);
  };
  return (
    <li>
      <div className="title">🏷 {title}</div>
      <div className="address">주소 : {address}</div>
      <div className="content">내용 : {content}</div>
      <div className="createdAt">날짜 : {createdAt}</div>
      <button
        className="contentDelete"
        onClick={() => deleteContents(contents.id)}
      >
        DELETE
      </button>

      <button className="contentEdit" onClick={() => handleEditModal(true)}>
        EDIT
      </button>
      {editModal ? (
        <EditModal
          onModal={handleEditModal}
          contents={contents}
          editContents={editContents}
        />
      ) : (
        ""
      )}
    </li>
  );
};
