import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectUsers,
} from "../../store/middleWare/selectors";
import getAllUsers from "../../store/middleWare/middleUsers";
import { useCallback, useEffect } from "react";
import { CircularProgress } from "@mui/material";
const ApiCompThunk = () => {
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.users);
  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const requestUsers = () => {
    dispatch(getAllUsers());
  };

  useEffect(() => {
    requestUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderUsers = useCallback(
    (user) => <li key={user.id}>{user.username}</li>,
    []
  );
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    return (
      <div>
        <h3>Error</h3> <button onClick={requestUsers}>Retry</button>
      </div>
    );
  }
  return <ul>{users.map(renderUsers)}</ul>;
};

export default ApiCompThunk;
