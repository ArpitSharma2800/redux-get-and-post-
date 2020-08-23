import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";
import Home from "./Container/Home/Home";
import Upload from "./Container/Upload/Upload";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/add">
            <button>add</button>
          </Link>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <Upload />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
