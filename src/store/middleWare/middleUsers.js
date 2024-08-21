import { API_URL_USERS } from "../constants/apiURL";
import {
  getUsersFailure,
  getUsersRequest,
  getUsersSuccess,
} from "./actionCreators";

export const getAllUsers = () => async (dispatch, getState) => {
  //action который является thunkom
  dispatch(getUsersRequest());
  try {
    const responce = await fetch(API_URL_USERS);
    if (!responce.ok) {
      throw new Error(`Request failed with status ${responce.status}`);
    }
    const users = await responce.json();

    dispatch(getUsersSuccess(users));
  } catch (error) {
    dispatch(getUsersFailure(error.message));
  }
};

export default getAllUsers;
