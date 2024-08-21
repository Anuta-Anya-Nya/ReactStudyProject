import { Link } from "react-router-dom";
function HeaderMenu() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/chats"}>Чаты</Link>
        </li>
        <li>
          <Link to={"/profile"}>Профиль</Link>
        </li>
        <li>
          <Link to={"/mycomp"}>Компонент</Link>
        </li>
        <li>
          <Link to={"/reactRedux"}>ReactRedux</Link>
        </li>
        <li>
          <Link to={"/apiComp"}>API Comp</Link>
        </li>
        <li>
          <Link to={"/apiCompThunk"}>API Thunk</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
