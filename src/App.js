import "./styles.css";
import Form from "./Form";
import Script from "./Script";
import Col3 from "./Col3";
import "bootstrap/dist/css/bootstrap.css";
import background from "./images/mountains_small.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container card ">
        <div
          style={{
            backgroundImage: `URL(${background})`,
          }}
        >
          <div className="card-body all">
            <div className="row">
              <div className="col-9">
                <Form />
              </div>
              <div className="col-3">
                <Col3 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script />
    </div>
  );
}
