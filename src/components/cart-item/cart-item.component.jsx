import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt= {name}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>

    const { name, quantity } = cartItem;
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    );
};

export default CartItem;