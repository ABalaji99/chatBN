import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import './Singup.css'
import user from '../assests/bot.jpg'
import { GrAddCircle } from 'react-icons/gr';



function Singup() {
  return (
    <Container>
      <Row>
      
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{width:'80%', maxWidth:500}}>
             <h1 className='text-center'>Create Account</h1>
             <div className='singup-pic-controller text-center'>
                <img src={user} style={{height:30 , width:30}} className='singup-profile-pic' alt="user" />
                <label for="image-upload" className='image-upload-label'><GrAddCircle/></label>
             </div>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            
            </Form.Group>


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
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="py-4">
                <p className="text-center">Don't have an account <Link to='/singup'>Singup</Link></p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="singup-bg">
        
        </Col>
      </Row>
    </Container>
  )
}

export default Singup