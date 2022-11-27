import "./styles.css";
import Col5 from "./Col5";
import Col4 from "./Col4";
import Col3 from "./Col3";
import Script from "./Script";
import Row from "react-bootstrap/Row";
import background from "./images/mountains_small.jpg";

export default function App() {
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
              <Row>
                <Col5 />
                <Col4 />
                <Col3 />
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Script />
    </div>
  );
}
