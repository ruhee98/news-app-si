import React, {useContext, useRef, useState} from 'react';
import {Container, Card, Form, Alert, Button} from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import {useAuth} from '../firebase/AuthProvider'

export const ForgotPasswordPage =  () => {
    
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const {resetPassword} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault()

    try{
     
      setMessage('')
      setError('')
      setLoading(true)
      await 
      resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instruction")
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false)
    
  } 
    return (
        <div>
            <div className="mt-8">
                <Card>
                <Card.Body>
          <h3 className="text-center mb-4">Password Reset</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

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
          <Button 
          disabled={loading} 
          className="w-100"
          variant="primary" 
          type="submit"  >
            Reset Password
          </Button>
          <br />
          {/* <Button>
          Sign in with Google
        </Button> */}
         <p className="text-center my-3">
          <Link to = "/login" className="text-blue-500 hover:text-blue-600">
           Log In
          </Link>
          <br />
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "} 
          </p>

        </Form>
            </Card>         
          
      </div>
        </div>
    )
}