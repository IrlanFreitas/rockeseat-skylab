import React from "react";
import Header from "./components/Header/index";
import './styles.css'

import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
