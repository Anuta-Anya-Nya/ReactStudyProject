import { useParams } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
function ChatComp() {
  const chatId = useParams().chatId;
  return (
    <div>
      <HeaderMenu />
      <h1>This is my new comp {chatId}</h1>
    </div>
  );
}

export default ChatComp;
