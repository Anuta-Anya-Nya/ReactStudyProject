const Message = ({ author, text }) => {
  return (
    <div>
      <hr />
      <h1>{author}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Message;
