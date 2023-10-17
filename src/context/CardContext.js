import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (item) => {
        const newItem = { ...item, count: (cart[item.recipe.label] ? cart[item.recipe.label].count + 1 : 1) };
        setCart({ ...cart, [item.recipe.label]: newItem });
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCart = { ...cart };
        if (updatedCart[itemToRemove.recipe.label]) {
            if (updatedCart[itemToRemove.recipe.label].count === 1) {
                delete updatedCart[itemToRemove.recipe.label];
            } else {
                updatedCart[itemToRemove.recipe.label].count -= 1;
            }
        }
        setCart(updatedCart);
    };

    const updateQuantity = (item, quantity) => {
        if (quantity > 0) {
            const updatedCart = { ...cart };
            if (updatedCart[item.recipe.label]) {
                updatedCart[item.recipe.label].count = quantity;
            }
            setCart(updatedCart);
        }
    };

    const calculateTotal = () => {
        let total = 0;
        Object.values(cart).forEach((item) => {
            
            total += Math.round(item.recipe.calories / 10 * item.count);
        });
        return total;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
