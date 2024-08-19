import HeaderMenu from "./HeaderMenu";
import Container from "@mui/material/Container";
// import { store2 } from "../store/initialState/store2";
import { useCallback, useState } from "react";
import action_1 from "../store/actionCreators/action_1";
import action_2 from "../store/actionCreators/action_2";
import { useDispatch, useSelector } from "react-redux";
// просто redux
// function MyReactRedux() {
//   const [update, setUpdate] = useState();
//   const [text, setText] = useState("");
//   const { showInfo, info } = store2.getState();
//   const dispatch = store2.dispatch;

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const toggleShowInfo = useCallback(() => {
//     dispatch(action_1());
//     setUpdate({});
//   }, [dispatch]);

//   const changeText = useCallback(() => {
//     dispatch(action_2(text));
//     setText("");
//   }, [text, dispatch]);

//   return (
//     <Container>
//       <div>
//         <HeaderMenu />
//         <h1>ReactRedux</h1>
//         <input
//           type="checkbox"
//           value={showInfo}
//           checked={showInfo}
//           onChange={toggleShowInfo}
//         />
//         <span>Показать текст</span>
//         {showInfo && <div>{info}</div>}
//         <div>
//           <input type="text" value={text} onChange={handleChange} />
//           <button onClick={changeText}>Изменить текст</button>
//         </div>
//       </div>
//     </Container>
//   );
// }

function MyReactRedux() {
  // react-redux

  const [text, setText] = useState("");
  const { showInfo, info } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toggleShowInfo = useCallback(() => {
    dispatch(action_1());
  }, [dispatch]);

  const changeText = useCallback(() => {
    dispatch(action_2(text));
    setText("");
  }, [text, dispatch]);

  return (
    <Container>
      <div>
        <HeaderMenu />
        <h1>ReactRedux</h1>
        <input
          type="checkbox"
          value={showInfo}
          checked={showInfo}
          onChange={toggleShowInfo}
        />
        <span>Показать текст</span>
        {showInfo && <div>{info}</div>}
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button onClick={changeText}>Изменить текст</button>
        </div>
      </div>
    </Container>
  );
}

export default MyReactRedux;
