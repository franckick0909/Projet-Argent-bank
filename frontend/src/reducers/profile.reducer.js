import { PROFILE } from "../actions/post.actions";
import { PROFILE_ERROR } from "../actions/post.actions";


const initialState = {};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
    case PROFILE:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.userName,
        };
      case PROFILE_ERROR:
        return {
          ...state,
          message: action.payload.message,
        };
    default:
      return state;
  }
}
