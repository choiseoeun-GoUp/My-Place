import React, { useState } from "react";

export const Content = ({ contents, deleteContents }) => {
  const { id, title, address, content, createdAt } = contents;
  console.log(contents);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const handleEditModal = () => {
    setEditModal(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <li>
      <div>{id}</div>
      <div>{title}</div>
      <div>{address}</div>
      <div>{content}</div>
      <div>{createdAt}</div>
      <button onClick={() => deleteContents(contents.id)}>삭제</button>
      <button onClick={() => setEditModal(true)}>수정</button>
    </li>
  );
};
