import React, {useRef, useState} from 'react';
import {Container, Card, Form, Alert, Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../firebase/AuthProvider'
import HeaderComponent from '../../Header/header';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const {signup} = useAuth();
  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, 
      passwordRef.current.value)
      history.push("/profile")

    }catch {
      setError("Failed to create an account");
    }

    setLoading(false)
    
  }
    
  return (
    <div>
      <HeaderComponent />
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "50vh"}}>
        <div className="w-100"
        style={{maxWidth: "700px"}}>
<Card>
        <Card.Body>
          <h3 className="text-center mb-4">Sign Up</h3>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group id="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    name="email"
    placeholder="Enter email"
    ref={emailRef}
    required
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    name="password"
    placeholder="Password"
    ref={passwordRef}
    required
    />
  </Form.Group>
  <Form.Group id="password-confirmation">
    <Form.Label>Password Confirmation</Form.Label>
    <Form.Control 
    type="password" 
    ref={passwordConfirmRef}
    placeholder="Type Password Again"
    required />
  </Form.Group>
  <Button 
  disabled={loading}
  className="w-100"
  variant="primary" 
  type="submit"  
  >
    Sign Up
  </Button>
  
  <p>Already Have an account?
  <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Sign in here
  </Link>
  </p>
  </Form>
        </Card>
       
        </div>
        </Container>
    </div>
  );
};

export default SignUp;



