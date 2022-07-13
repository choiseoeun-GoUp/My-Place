import { Content } from "./Content";

export const Contents = ({ contents, deleteContents }) => {
  return (
    <section>
      <ul>
        {contents.map((contents) => {
          return (
            <Content
              key={contents.id}
              contents={contents}
              deleteContents={deleteContents}
            />
          );
        })}
      </ul>
    </section>
  );
};
