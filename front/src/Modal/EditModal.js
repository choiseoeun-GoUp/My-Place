import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ onModal, contents, editContents }) => {
  const { id, title, address, content } = contents;

  const [Title, setTitle] = useState(title);
  const [Content, setContent] = useState(content);
  const [Address, setAddress] = useState(address);

  const handleConfirmClick = () => {
    const changeContent = {
      title: Title,
      content: Content,
      address: Address,
    };
    console.log(typeof id);
    console.log(contents.id);
    editContents(changeContent, id);
    onModal();
    console.log(contents);
    console.log(changeContent);
    // alert("수정완료");
  };

  return (
    <>
      <div className="Edit">
        <input
          type="text"
          // value={title}
          defaultValue={title}
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          // value={address}
          placeholder="주소"
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          type="text"
          // value={content}
          placeholder="내용"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="edit-modal-btn cancel" onClick={() => onModal()}>
          Cancel
        </button>
        <button
          className="edit-modal-btn confirm"
          onClick={() => handleConfirmClick()}
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default EditModal;
