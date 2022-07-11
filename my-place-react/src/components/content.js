export const Content = ({ contents, deleteDiscussion }) => {
  const { id, title, address, content, createdAt } = contents;
  console.log(contents);

  return (
    <li>
      <div>{id}</div>
      <div>{title}</div>
      <div>{address}</div>
      <div>{content}</div>
      <div>{createdAt}</div>
    </li>
  );
};
