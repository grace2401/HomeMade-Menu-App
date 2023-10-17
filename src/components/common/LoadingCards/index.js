import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';

const LoadingCard = () => {
  return (
    <div className="col-md-4">
      <Card className="product-card">
        <div className="loading-card-image"></div>
        <Card.Body>
          <Card.Title className="loading-card-title"></Card.Title>
          <Card.Text className="loading-card-text"></Card.Text>
          <div className="bottom">
            <p className="price-loading">Loading...</p>
            <Button variant="secondary" className="loading-button" disabled>
              Loading...
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoadingCard;
