import { useParams } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import { useSelector } from "react-redux";

function ChatComp() {
  const chatId = +useParams().chatId;
  const currentMessageList = useSelector(
    (state) => state.message.messageList[chatId]
  );
  const currentChat = useSelector((state) =>
    state.chats.chatList.find((el) => el.id === chatId)
  );

  return (
    <div>
      <HeaderMenu />
      <h1>This is chat with {currentChat.name}</h1>

      {currentMessageList
        ? currentMessageList.map((el, i) => (
            <div key={i}>
              <h3>{el.author}</h3>
              <div>{el.text}</div>
            </div>
          ))
        : "Сообщений пока нет"}
    </div>
  );
}

export default ChatComp;
