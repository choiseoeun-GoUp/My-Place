import React, { useState } from "react";

const EditModal = ({ contents, editContents }) => {
  const { title, id } = contents;

  // const [name, setName] = useState(author);
  // const [title, setTitle] = useState(propTitle);
  // const [content, setContent] = useState(bodyHTML);

  // const handleConfirmClick = () => {
  //   const changeDiscussion = {
  //     author: name,
  //     title,
  //     bodyHTML: content,
  //   };

  //   editDiscussion(changeDiscussion, id);
  //   onModal();
  // };

  return (
    <>
      <div className="edit-modal">
        <h1>Edit Discussion</h1>
        {/* <div className="form__input--wrapper">
          <div className="form__input--name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__input--title">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              cols="100"
              rows="100"
              placeholder="Ask a question, start a conversation, or make an announcement"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div> */}

        <button className="edit-modal-btn cancel">Cancel</button>
        <button className="edit-modal-btn confirm">Confirm</button>
      </div>
    </>
  );
};

export default EditModal;
