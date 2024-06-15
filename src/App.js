import "./App.css";
import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import HeaderMenu from "./components/HeaderMenu";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

function App() {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState({ text: "", author: "" });
  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: "Anna",
      history: [
        { idMessage: 1, author: "Anna", text: "abs" },
        { idMessage: 2, author: "Any", text: "qqwwq" },
        { idMessage: 3, author: "Anna", text: "qwerty" },
      ],
    },
    {
      id: 2,
      name: "Roma",
      history: [
        { idMessage: 1, author: "Roma", text: "abs" },
        { idMessage: 2, author: "Any", text: "qqwwq" },
        { idMessage: 3, author: "Anna", text: "qwerty" },
      ],
    },
  ]);

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

  const deleteChat = (chatId) => {
    setChatList((pervstate) => {
      return pervstate.filter((el) => el.id !== chatId);
    });
  };

  const addChat = () => {
    const nameUser = prompt("введите имя", "new");
    setChatList((pervstate) => [
      ...pervstate,
      { id: Date.now(), name: nameUser, history: [] },
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderMenu />
      <div className="App">
        <Container maxWidth="xl" style={{ display: "flex", gap: "30px" }}>
          <Box
            style={{
              backgroundColor: "lightgray",
              width: "20%",
              height: "100vh",
              padding: "0px 15px",
            }}
          >
            <List>
              {chatList.map((chatItem) => (
                <div
                  key={chatItem.id}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItem>
                    <Link to={`/chats/${chatItem.id}`}>{chatItem.name}</Link>
                  </ListItem>

                  <DeleteForeverIcon onClick={() => deleteChat(chatItem.id)} />

                  <Divider
                    variant="inset"
                    component="li"
                    style={{ marginLeft: "0" }}
                  />
                </div>
              ))}
            </List>
            <AddCircleIcon onClick={addChat} />
          </Box>
          <Box style={{ flexGrow: "1" }}>
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
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Form = ({ data, setData, setMessage }) => {
  const { text, author } = data;
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
    ref.current.focus();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessage((pervstate) => [...pervstate, { text, author }]);
    }
    setData({ text: "", author: "" });
    ref.current.focus();
  };

  return (
    <form
      onSubmit={submitForm}
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="standard-basic"
        label="Текст"
        variant="standard"
        value={text}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, text: e.target.value }))
        }
        ref={ref}
      />
      <TextField
        id="standard-basic"
        label="Имя"
        variant="standard"
        value={author}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, author: e.target.value }))
        }
      />
      {/* <input
        placeholder="Текст"
        value={text}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, text: e.target.value }))
        }
        ref={ref}
      /> */}
      {/* <input
        placeholder="Имя"
        value={author}
        onChange={(e) =>
          setData((pervstate) => ({ ...pervstate, author: e.target.value }))
        }
      /> */}

      <Button
        variant="contained"
        type="submit"
        // style={{
        //   backgroundColor: theme.palette.secondary.light,
        //   borderColor: theme.palette.secondary.dark,
        // }}
      >
        Отправить
      </Button>
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
