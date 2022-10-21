import { useEffect } from "react";

import { HomePage } from "./pages/home/HomaPage";

import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "Solar Energy Production";
  });
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
