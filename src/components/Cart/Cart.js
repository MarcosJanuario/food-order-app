import React from 'react';
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = <ul>
        {
            [
                {id: 'c1', name: 'sushi', amout: 2, price: 12.99}
            ].map(item => <li>{item.name}</li>)
        }
    </ul>

    return (
        <Modal onCloseModal={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                        onClick={props.onCloseCart}
                >Close</button>
                <button className={classes.button }>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;