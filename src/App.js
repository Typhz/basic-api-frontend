import React from "react";
import Routes from "./routes";
import history from "./services/history";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/globalStyles.css";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;