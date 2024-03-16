import { UPDATE_USER } from "../actions/post.actions";

const initialState = {
    userName: "",
};

export default function editReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
}