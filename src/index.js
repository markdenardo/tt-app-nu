import React from "react";
import ReactDOM from "react-dom";
import movieReducer from "./reducers/movieReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./containers/App";
import Movies from "./components/Movies";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  movieReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Movies />
  </Provider>,
  document.getElementById("root")
);
