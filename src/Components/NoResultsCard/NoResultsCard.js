import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './NoResults.css';

const NoResultsCard = () => {
    
    return (
            <Card
                bg='danger'
                text='white'
                style={{ width: '18rem' }}
                className="mb-2 no-results" >
                <Card.Header>Error!</Card.Header>
                <Card.Body>
                    <Card.Title> No Results Found </Card.Title>
                    <Card.Text>
                        Try Searching for another term!
                        <Link to='/'>
                            <p style={{margin: '1em 0'}}>Go home</p>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
    );  
}

export default NoResultsCard;
