import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const indice = cart.findIndex(prod => prod.id === item.id);
            const aux = [...cart];
            aux[indice].quantity = quantity; // Corrección aquí
            setCart(aux);
        } else {
            const newItem = {
                ...item,
                quantity: quantity
            };
    
            setCart([...cart, newItem]);
        }
    };
    

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId))
        

    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)

    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, getItemQuantity}}>
            { props.children }
        </CartContext.Provider>
    )
}