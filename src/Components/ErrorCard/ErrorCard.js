import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Error.css';

const ErrorCard = () => {
    
    return (
            <Card
                bg='danger'
                text='white'
                style={{ width: '18rem' }}
                className="mb-2 error-card" >
                <Card.Header>Error!</Card.Header>
                <Card.Body>
                    <Card.Title> Application Error  </Card.Title>
                    <Card.Text>
                        Either Reddit is offline, or a Fetch request has failed.
                        <Link to='/'>
                            <p style={{margin: '1em 0'}}>Go home</p>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
    );  
}

export default ErrorCard;
