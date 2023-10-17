import React from 'react';
import { useCart } from '../../../context/CardContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function CartPage() {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();

  const cartItems = Object.values(cart);

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item, quantity);
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");
  };
  const navigate = useNavigate();

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <center>
            <div className='empty-cart'>
              <h2>Your Cart is Empty.</h2>
              <button onClick={() => navigate('/')}>Add More Items</button>
            </div>
          </center>
        </div>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price (rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="cart-item">
                  <td>
                    <img src={item.recipe.image} alt={item.recipe.label} width="50" />
                  </td>
                  <td>{item.recipe.label}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.count}
                      onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td>{Math.round(item.recipe.calories / 10)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="total-price">Total Price: {calculateTotal()} rs</p>
          <div className="checkout-buttons">
            <button className="checkout-button" onClick={() => navigate('/')}>Add More Items</button>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>



      )}
    </div>
  );
}

export default CartPage;
