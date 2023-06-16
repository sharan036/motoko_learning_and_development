
import * as React from "react";
import ReactDOM from "react-dom/client";
import { motoko_learning_and_development_backend } from "../../declarations/motoko_learning_and_development_backend";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Container from 'react-bootstrap/Container';
import UpArrow from "./components/Arrow";
import Footer from "./components/Footer";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await motoko_learning_and_development_backend.greet(name);
    setMessage(greeting);
  }

  return (
    <Container fluid className="p-0">
      <Container fluid className="p-0 sticky-outer-wrapper">
        <Header/>
      </Container>
      <Container>
        <Tabs/>
      </Container>
      <UpArrow/>
      <Footer/>
    </Container>
    // <div style={{ "fontSize": "30px" }}>
    //   <div style={{ "backgroundColor": "yellow" }}>
    //     <p>Greetings, from DFINITY!</p>
    //     <p>
    //       {" "}
    //       Type your message in the Name input field, then click{" "}
    //       <b> Get Greeting</b> to display the result.
    //     </p>
    //   </div>
    //   <div style={{ margin: "30px" }}>
    //     <input
    //       id="name"
    //       value={name}
    //       onChange={(ev) => setName(ev.target.value)}
    //     ></input>
    //     <button onClick={doGreet}>Get Greeting!</button>
    //   </div>
    //   <div>
    //     Greeting is: "
    //     <span style={{ color: "blue" }}>{message}</span>"
    //   </div>
    // </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<MyHello />);