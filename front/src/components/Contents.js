import { Content } from "./Content";
import "./Content.css";

export const Contents = ({ contents, deleteContents, editContents }) => {
  return (
    <section className="contentsBox">
      <ul>
        <div>{contents.category}</div>
        {contents.map((contents) => {
          return (
            <Content
              key={contents.id}
              contents={contents}
              deleteContents={deleteContents}
              editContents={editContents}
            />
          );
        })}
      </ul>
    </section>
  );
};
