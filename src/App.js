import React from "react";
import "./App.css";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { ThemeContext } from "./ThemeContext";

function App() {
  return (
    <ThemeContext />
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
    //   <div className="w-100" style={{ maxWidth: "600px" }}>
    //     <Signup />
    //   </div>
    // </Container>
  );
}

export default App;
