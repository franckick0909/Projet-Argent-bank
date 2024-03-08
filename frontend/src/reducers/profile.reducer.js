import { PROFILE, PROFILE_ERROR } from "../actions/post.actions";

const initialState = {};


export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case PROFILE_ERROR:
            return {
                ...state,
                profile: null,
            };

        default:
            return state;
    }
}