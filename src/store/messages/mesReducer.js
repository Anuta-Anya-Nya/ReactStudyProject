import { ADD_MESSAGE } from "./actions";
import initState from "./initState";

const messageReduser = (state = initState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.payload.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: [
            ...currentList,
            {
              text: action.payload.text,
              author: action.payload.author,
              id: `${action.payload.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }

    default:
      return state;
  }
};

export default messageReduser;
