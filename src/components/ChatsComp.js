import "../App.css";
import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { addChatAct, delChatAct } from "../store/chats/actionCreators";
import { addMessage } from "../store/messages/actionCreators";
import { getChatList } from "../store/chats/selectors";
import { AUTHORS, AUTO_MESSAGE } from "../store/constants/messages";

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

function ChatsComp() {
  const [messageBody, setMessageBody] = useState({ text: "", author: "" });
  const [chatId, setChatId] = useState();
  // const ROBOT_MES = "Привет, человек! я получил твое сообщение";

  const chatList = useSelector(getChatList);

  const messageList = useSelector((state) => state.message.messageList);

  const dispatch = useDispatch();

  const selectChat = (chatId) => setChatId(chatId);

  const deleteChat = (chatId) => {
    dispatch(delChatAct(chatId));
  };
  const addChat = () => {
    const nameUser = prompt("введите имя", "new");
    dispatch(addChatAct(nameUser));
  };
  const onAddMessage = (message) => {
    dispatch(addMessageWithThunk(chatId, message));
    // dispatch(addMessage(chatId, message));
  };

  const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
      setTimeout(
        () =>
          dispatch(
            addMessage(chatId, {
              text: AUTO_MESSAGE.HELLO_MES,
              author: AUTHORS.BOT,
            })
          ),
        2000
      );
    }
  };

  // useEffect(() => {
  //   const mes = { text: ROBOT_MES, author: "robot" };
  //   if (chatId) {
  //     if (
  //       messageList[chatId].length > 0 &&
  //       messageList[chatId].slice(-1)[0].author !== "robot"
  //     ) {
  //       setTimeout(() => {
  //         onAddMessage(mes);
  //       }, 1500);
  //     }
  //   }
  // }, [messageList]);

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
                    <Link to={`/chats/${chatItem.id}`}>
                      Подробнее о {chatItem.name}
                    </Link>
                    <span onClick={() => selectChat(chatItem.id)}>
                      {chatItem.name}
                    </span>
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
          {chatId ? (
            <Box style={{ flexGrow: "1" }}>
              <Form
                data={messageBody}
                setData={setMessageBody}
                setMessage={onAddMessage}
                chatId={chatId}
              ></Form>
              <div className="messageList">
                {messageList[chatId] ? (
                  messageList[chatId].map((el, i) => (
                    <Message text={el.text} author={el.author} key={i} />
                  ))
                ) : (
                  <div>Сообщений пока нет</div>
                )}
              </div>
            </Box>
          ) : (
            <Box style={{ flexGrow: "1" }}>Выберите чат</Box>
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default ChatsComp;

const Form = ({ data, setData, setMessage, chatId }) => {
  const { text, author } = data;

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (chatId > 0 && text.length > 0) {
      setMessage(data);
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

      <Button variant="contained" type="submit">
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
    </div>
  );
};
