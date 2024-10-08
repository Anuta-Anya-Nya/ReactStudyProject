import HeaderMenu from "./HeaderMenu";
import Container from "@mui/material/Container";
import { store, actionToggleName } from "../store/initialState/store";
import { useCallback, useState } from "react";

//используется только библиотека redux, в остальных компонентах react-redux

function ProfileComp() {
  const { showName, userName } = store.getState();
  const [update, setUpdate] = useState(); //при изменении стора не перерендирается страница, надо изменить стейт или пропс. создает пустой стейт для отрисовки нового стора
  const dispatch = store.dispatch;

  const setShowName = useCallback(() => {
    dispatch(actionToggleName);
    setUpdate({});
  }, [dispatch]);

  return (
    <Container>
      <HeaderMenu />
      <p>12345</p>
      <h1>PROFILE</h1>
      <div>{showName ? userName : "Привет, незнакомец"}</div>
      <button onClick={setShowName}>показать/скрыть имя</button>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
    </Container>
  );
}

export default ProfileComp;
