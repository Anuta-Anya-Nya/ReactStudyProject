import { ADD_CHAT, DEL_CHAT } from "../chats/actions";

export function addChatAct(name) {
  return {
    type: ADD_CHAT,
    payload: name,
  };
}

export function delChatAct(id) {
  return {
    type: DEL_CHAT,
    payload: id,
  };
}

// export default addChatAct;
