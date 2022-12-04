import "./styles.css";
import React, { useState } from "react";
import Form from "./Form";
import Script from "./Script";
import Forecast from "./Forecast";
import "bootstrap/dist/css/bootstrap.css";
import background from "./images/mountains_small.jpg";

export default function App() {
  const [cityName, setCityName] = useState("");

  return (
    <div className="App">
      <div className="container card">
        <div
          style={{
            backgroundImage: `URL(${background})`,
          }}
        >
          <div className="card-body all">
            <div className="row">
              <div className="col-9">
                <Form updateData={setCityName} />
              </div>
              <div className="col-3">
                <Forecast name={cityName} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script />
    </div>
  );
}
