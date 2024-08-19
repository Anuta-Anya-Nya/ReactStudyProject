import { createStore } from "redux";
// import reducers from "./reducers/reducers";

// const store = createStore(reducers);

// export default store;

// // import { createStore } from 'redux';
// // import reducers from './reducers/reducers';

// // const store = createStore(reducers);

// // export default store;

const initialState = {
  showName: false,
  userName: "Anna",
};

const TOGGLE_NAME = "toggleShowName"; //type action

export const actionToggleName = {
  //action

  type: TOGGLE_NAME,
  //value: ...
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAME:
      return {
        ...state,
        showName: !state.showName,
      };

    default:
      return state;
  }
};

export const store = createStore(profileReducer);
