import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "../reducers/simpleReducer";
import chatReducer from "../chats/chatReducer";
import messageReduser from "../messages/mesReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store2 = createStore(
  // reducer,
  combineReducers({
    chats: chatReducer,
    profile: reducer,
    message: messageReduser,
  }),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(thunk))
);
