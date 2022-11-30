import "./styles.css";
import Form from "./Form";
import Script from "./Script";
import "bootstrap/dist/css/bootstrap.css";
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
            <Form />
          </div>
        </div>
      </div>
      <Script />
    </div>
  );
}
