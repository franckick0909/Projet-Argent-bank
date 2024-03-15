import { LOGIN, LOGIN_ERROR, TOKEN, LOGOUT } from "../actions/post.actions";

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        token: action.payload.token,
        email: action.payload.email,
        password: action.payload.password,
        message: action.payload.message,
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        email: null,
        password: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        message: action.payload.message,
        loading: false,
        token: null,
        email: null,
        password: null,
      };

    default:
      return state;
  }
}
