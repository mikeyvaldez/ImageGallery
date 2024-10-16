import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1506610654-064fbba4780c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQxNDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg4ODE1NzJ8&ixlib=rb-4.0.3&q=80&w=1080"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
