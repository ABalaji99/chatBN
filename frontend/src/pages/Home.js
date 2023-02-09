import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {BsChatSquareQuoteFill} from 'react-icons/bs'
import './Home.css'

function Home() {
  return (
    <Row>
        <Col md={6} className='d-flex flext-direction-column align-items-center justify-content-center'>
            <div>
                <h1>Share the word with your friends</h1>
                <p>ChatBN let you to connect with our friends</p>
                <LinkContainer to="/chat">
                    <Button variant='success'>Get Started <BsChatSquareQuoteFill/></Button>
                </LinkContainer>
            </div>
        </Col>
        <Col md={6} className='home_bg'>
        </Col>
    </Row>
  )
}

export default Home