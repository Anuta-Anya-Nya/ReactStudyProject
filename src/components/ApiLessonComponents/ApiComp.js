import { useState, useCallback } from "react";
import { CircularProgress, Container } from "@mui/material";
import HeaderMenu from "../HeaderMenu";
import { useEffect } from "react";
import { API_URL_USERS } from "../../store/constants/apiURL";

function ApiComp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const requestUsers1 = () => {
  //   setError(false);
  //   setLoading(true);
  //   fetch(API_URL_USERS)
  //     .then((resp) => {
  //       if (!resp.ok) {
  //         throw new Error(`Error ${resp.status}`);
  //       }
  //       return resp.json();
  //     })
  //     .then((data) => setUsers(data))
  //     .catch((er) => {
  //       console.log(er);
  //       setError(er);
  //     })
  //     .finally(() => setLoading(false));
  // };

  // о использование такого синтаксиса возможно, только если функция для
  // отправки запроса вынесена в отдельный коллбэк - коллбэк useEffect нельзя объявлять асинхронным
  const requestUsers = async () => {
    setError(false);
    setLoading(true);
    try {
      const response = await fetch(API_URL_USERS);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // запрос отправляется после первого рендера
  useEffect(() => {
    requestUsers();
  }, []);

  const renderUsers = useCallback(
    (users) => <li key={users.id}>{users.name}</li>,
    []
  );
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestUsers}>Retry</button>
      </>
    );
  }

  return (
    <>
      <Container>
        <HeaderMenu />
        <div>New Api Component</div>
        {/* {loading ? <div>Загрузка.......</div> : <div>Данные загружены</div>} */}
        <ul>{users.map(renderUsers)}</ul>
      </Container>
    </>
  );
}

export default ApiComp;
