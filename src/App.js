import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({ text: "", author: "" });

  const ROBOT_MES = "Привет, человек! я получил твое сообщение";

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== "robot") {
      setTimeout(() => {
        setMessageList((pervstate) => [
          ...pervstate,
          { text: ROBOT_MES, author: "robot" },
        ]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Form
        data={messageBody}
        setData={setMessageBody}
        setMessage={setMessageList}
      ></Form>
      <div className="messageList">
        {messageList.map((el, i) => (
          <Message text={el.text} author={el.author} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {
  const { text, author } = data;

  const submitForm = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessage((pervstate) => [...pervstate, { text, author }]);
    }
    setData({ text: "", author: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        placeholder="Текст"
        value={text}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, text: e.target.value }))
        }
      />
      <input
        placeholder="Имя"
        value={author}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, author: e.target.value }))
        }
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

const Message = ({ author, text }) => {
  return (
    <div>
      <hr />
      <h1>{author}</h1>
      <p>{text}</p>
      <hr />
    </div>
  );
};
