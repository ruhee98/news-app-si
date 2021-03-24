import React, {useContext, useRef, useState} from 'react';
import {Container, Card, Form, Alert, Button} from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import {useAuth} from '../firebase/AuthProvider'


const LoginForm =  () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {login, currentUser} = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    try{
      setError('')
      setLoading(true)
      await 
      login(emailRef.current.value, 
        passwordRef.current.value)
        history.push("/")
    }catch {
      setError("Failed to sign in");
    }

    setLoading(false)
    
  } 
return (
<div>
<div className="mt-8">
        <Card.Body>
          <h3 className="text-center mb-4">Sign In</h3>
        {currentUser && currentUser.email}
        {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label className="block">
            Email:
          </Form.Label>
          <Form.Control
            type="email"
            className="my-1 p-1 w-full"
            ref={emailRef}
            placeholder="E.g: faruq123@gmail.com"
          />
          <Form.Label className="block">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            ref = {passwordRef}
            placeholder="Your Password"
          />
          <Button 
          disabled={loading} 
          className="w-100"
          variant="primary" 
          type="submit"  >
            Login
          </Button>
          <br />
          {/* <Button>
          Sign in with Google
        </Button> */}
        </Form>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
    )
}

export default LoginForm;



