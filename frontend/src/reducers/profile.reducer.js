import { PROFILE } from "../actions/post.actions";

const initialState = {}


export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            };
        default:
            return state;
    }
}