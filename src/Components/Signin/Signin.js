import axios from "axios";

import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const SignIn = (loadUser) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ResponseData, setResponseData] = useState("");
  const navigate = useNavigate('')

  const onSubmitButton = () => {
    useEffect(() => {
      if(ResponseData === 'success') {
        navigate('/facepage')
      }
    }, [ResponseData, navigate])
  
    axios
      .post("http://localhost:3005/signin", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setResponseData(res.data);
      });
  };

  




  return (
    <Container>
      <Card
        style={{ width: "24rem", backgroundColor: "transparent" }}
        className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
      >
        <Card.Body>
          <Card.Title className="text-center mb-4">Sign in</Card.Title>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ backgroundColor: "transparent" }}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                style={{ backgroundColor: "transparent" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
                variant="primary"
                type="button"
                className="w-100"
                onClick={onSubmitButton}
              >
                Sign in
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignIn;
