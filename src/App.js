import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by <a href="">Enolia Ritabile Monareng</a> and
          is{" "}
          <a href="https://github.com/enolia1/weather-react-app">
            open-sourced on GitHub
          </a>{" "}
          hosted in{" "}
          <a href="https://glittering-gingersnap-ce8ae9.netlify.app/">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
