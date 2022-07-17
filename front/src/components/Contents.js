import { Content } from "./Content";

export const Contents = ({ contents, deleteContents, editContents }) => {
  return (
    <section>
      <ul>
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
