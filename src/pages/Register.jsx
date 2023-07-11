import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';  
import Form from 'react-bootstrap/Form';
import '../pages/Register.css'


const Register = () => {
  return (
    <div className='wallpaper'>
      <Header />
      <Form className='test'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />

        </Form.Group>
        <Button variant="danger">Submit</Button>
        <div>
          Register
        </div>


      </Form>

      

    </div>
  )
}

export default Register