import "../../App.css";
import { useState } from "react";

import HeaderMenu from "../HeaderMenu";

import { useDispatch, useSelector } from "react-redux";
import { addChatAct, delChatAct } from "../../store/chats/actionCreators";
import { addMessage } from "../../store/messages/actionCreators";
import { getChatList } from "../../store/chats/selectors";
import { AUTHORS, AUTO_MESSAGE } from "../../store/constants/messages";

import ChatsCompView from "./ChatsCompView";

function ChatsComp() {
  const [messageBody, setMessageBody] = useState({ text: "", author: "" });
  const [chatId, setChatId] = useState();

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
    <>
      <HeaderMenu />
      <ChatsCompView
        chatId={chatId}
        chatList={chatList}
        selectChat={selectChat}
        deleteChat={deleteChat}
        addChat={addChat}
        messageBody={messageBody}
        setMessageBody={setMessageBody}
        onAddMessage={onAddMessage}
        messageList={messageList}
      />
    </>
  );
}

export default ChatsComp;
