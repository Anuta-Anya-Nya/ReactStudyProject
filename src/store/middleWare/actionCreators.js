export const GET_USERS_REQUEST = "USERS::GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "USERS::GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "USERS::GET_USERS_FAILURE";

export const getUsersRequest = () => ({ type: GET_USERS_REQUEST });

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});
