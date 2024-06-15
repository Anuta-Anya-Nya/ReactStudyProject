import HeaderMenu from "./HeaderMenu";
import InputAutoFocus from "./InputAutoFocus";

function StartPage(props) {
  return (
    <div className="container">
      <HeaderMenu />
      <InputAutoFocus />
      <h1>Главная страница</h1>
    </div>
  );
}

export default StartPage;
