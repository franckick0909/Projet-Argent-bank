import { LOGIN, LOGIN_ERROR } from '../actions/post.actions';

const initialState = {
    isAuthenticated: false,
    loading: true,
    token: "",
    email: "",
    password: "",
    message: "",
};


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
        case LOGIN_ERROR:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                email: null,
                password: null,
                message: action.payload.message,

            };
        
        default:
            return state;
    }
}