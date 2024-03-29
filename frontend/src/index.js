import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loginPosts, profilePosts, updateUser } from "./actions/post.actions"; 
const store = configureStore({  

  reducer: rootReducer,  
  devTools: true,       
});

store.dispatch(loginPosts());
store.dispatch(profilePosts()); 
store.dispatch(updateUser()); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);