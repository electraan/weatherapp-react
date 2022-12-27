import React from "react";
import "./styles.css";

export default function Script() {
  return (
    <div className="Script">
      <script src="src/index.js"></script>
      <span className="open-source">
        <a
          href="https://github.com/electraan/weatherapp-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Antonina Ieremenko
      </span>
    </div>
  );
}
