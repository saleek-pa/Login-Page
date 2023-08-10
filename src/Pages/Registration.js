import React from "react";
import { useNavigate } from "react-router-dom";
import { FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={() => navigate("/login")}>
        <container className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-light mb-4">CREATE ACCOUNT</h1>
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-3 w-50"
          >
            <Form.Control type="text" placeholder="name@example.com" required />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 w-50"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            className="w-50"
            label="Password"
          >
            <Form.Control type="password" placeholder="Password" required />
          </FloatingLabel>
          <button type="submit" className="custom-btn mt-3 fw-bolder">
            SIGN UP
          </button>
        </container>
      </form>
    </>
  );
};

export default Registration;
