import { STATUSES } from "./statusesConst";
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "./actionCreators";

const initialState = {
  users: [],
  request: STATUSES.IDLE,
  error: null,
  loading: false,
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, request: STATUSES.REQUEST, loading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        request: STATUSES.SUCCESS,
        loading: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReduser;
