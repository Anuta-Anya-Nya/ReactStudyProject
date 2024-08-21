import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./components/StartPage";
import ProfileComp from "./components/ProfileComp";
import MyComp from "./components/MyComp";
import Error404 from "./components/Error404";
import ChatComp from "./components/ChatComp";
import MyReactRedux from "./components/MyReactRedux";
import { Provider } from "react-redux";
import { store2 } from "./store/initialState/store2";
import ChatsComp from "./components/ChatsComponents/ChatsComp";
import ApiCompThunk from "./components/ApiLessonComponents/ApiCompThunk";
import ApiComp from "./components/ApiLessonComponents/ApiComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/chats",
    element: <ChatsComp />,
  },
  {
    path: "chats/:chatId",
    element: <ChatComp />,
  },
  {
    path: "/profile",
    element: <ProfileComp />,
  },
  {
    path: "/myComp",
    element: <MyComp />,
  },
  {
    path: "/reactRedux",
    element: <MyReactRedux />,
  },
  {
    path: "/apiComp",
    element: <ApiComp />,
  },
  {
    path: "/apiCompThunk",
    element: <ApiCompThunk />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store2}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
