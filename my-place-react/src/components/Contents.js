import { Content } from "./content";

export const Contents = ({ contents, deleteDiscussion }) => {
  return (
    <section>
      <ul>
        {contents.map((contents) => {
          return (
            <Content
              key={contents.id}
              contents={contents}
              deleteDiscussion={deleteDiscussion}
            />
          );
        })}
      </ul>
    </section>
  );
};
