import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import ViewHistory from "./Components/ViewHistory/ViewHistory";
import Navbar from "./Components/Navbar/Navbar";
import Index from "./Components/Index/Index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route path="/viewHistory" component={ViewHistory} />
    </BrowserRouter>
  );
}

export default App;
