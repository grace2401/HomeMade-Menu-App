import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles.css';
import { useCart } from '../../../context/CardContext';

const Products = ({ data }) => {
  const { cart, addToCart } = useCart();
  return (
    <div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="food-card">
              <Card className="product-card">
                <Card.Img
                  className="product-card-img"
                  variant="top"
                  src={item.recipe.image}
                />
                <Card.Body>
                  <Card.Title>{item.recipe.label}</Card.Title>
                  <div className="bottom">
                    <p>Price: {Math.round(item.recipe.calories / 10)} rs</p>
                    <Button
                      variant="secondary"
                      onClick={() => addToCart(item)}
                    >
                      {cart[item.recipe.label] && cart[item.recipe.label].count > 0
                        ? `Add to Cart (${cart[item.recipe.label].count})`
                        : "Add to Cart"}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
