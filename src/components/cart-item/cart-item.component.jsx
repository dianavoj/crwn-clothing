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
    );
};

export default CartItem;