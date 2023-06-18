import { CartItemContainer, ItemDetails, Name, } from './cart-item.style';

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt= {name}/>
            <ItemDetails>
                <span>{name}</span>
                <span className='price'>{quantity} x ${price}</span>

            </ItemDetails>
        </CartItemContainer>

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