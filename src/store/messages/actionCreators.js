import { ADD_MESSAGE } from "./actions";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId: chatId,
    text: message.text,
    author: message.author,
  },
});
