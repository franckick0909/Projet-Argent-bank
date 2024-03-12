import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loginPosts, profilePosts,  } from "./actions/post.actions";


const store = configureStore({  // création du store
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(loginPosts());  // dispatch de l'action loginPosts
store.dispatch(profilePosts()); // dispatch de l'action profilePosts

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
