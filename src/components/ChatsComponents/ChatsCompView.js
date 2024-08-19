import "../../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Message from "./MessageComp";
import Form from "./FormComp";

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

const ChatsCompView = ({
  chatId,
  chatList,
  selectChat,
  deleteChat,
  addChat,
  messageBody,
  setMessageBody,
  onAddMessage,
  messageList,
}) => (
  <ThemeProvider theme={theme}>
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

export default ChatsCompView;
