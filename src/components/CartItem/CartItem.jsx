import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const CartItem = ({ id, name, price, quantity, item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className="card mb-3 cardCart">
            <div className="col md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                Precio: ${price}
                </p>
                <p className="card-text">
                Cantidad: ${quantity}
                </p>
                <p className="card-text">
                Subtotal: ${price * quantity}
                </p>
                <button className="btn btn-danger" onClick={() => removeItem(id)}><i class="fas fa-trash-alt"></i></button>

              </div>




            </div>
            
           
        </div>
    );
};

export default CartItem;
