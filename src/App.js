import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/86838-enolia-ritabile-monareng"
            target="_blank"
          >
            Enolia Ritabile Monareng
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/enolia1/weather-react-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          hosted in{" "}
          <a
            href="https://app.netlify.com/sites/moonlit-sawine-3d269d/deploys"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
