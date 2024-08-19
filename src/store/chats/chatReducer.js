import initState from "../chats/initState";
import { ADD_CHAT, DEL_CHAT } from "./actions";

const chatReduser = (state = initState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [...state.chatList, { id: Date.now(), name: action.payload }],
      };
    case DEL_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter((el) => {
          return el.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
export default chatReduser;
