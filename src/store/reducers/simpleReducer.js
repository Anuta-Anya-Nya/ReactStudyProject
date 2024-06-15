import initialState2 from "../initialState/initState2";
import ACTION_1 from "../actions/action_1";

export default function reducer(state = initialState2, action) {
  switch (action.type) {
    case ACTION_1:
      return { ...state, showInfo: !state.showInfo };

    default:
      return state;
  }
}
