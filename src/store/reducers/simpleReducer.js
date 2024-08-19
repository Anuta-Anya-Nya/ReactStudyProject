import initialState2 from "../initialState/initState2";
import ACTION_1 from "../actions/action_1";
import ACTION_2 from "../actions/action_2";

export default function reducer(state = initialState2, action) {
  switch (action.type) {
    case ACTION_1:
      return { ...state, showInfo: !state.showInfo };

    case ACTION_2:
      return { ...state, info: action.value };

    default:
      return state;
  }
}
