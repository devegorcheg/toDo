import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";

import { App } from "./features/App/components/App";

import { store } from "app/store";
import { history } from "utils/history";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Router history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
