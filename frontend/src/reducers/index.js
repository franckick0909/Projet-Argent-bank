import { combineReducers } from 'redux';
import profileReducer from './profile.reducer';
import loginReducer from './login.reducer';
import editReducer from './edit.reducer';

export default combineReducers({
    // tous les reducers
    loginReducer,
    profileReducer,
    editReducer,
});