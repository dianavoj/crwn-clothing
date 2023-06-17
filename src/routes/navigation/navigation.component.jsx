import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart-context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from './navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to=''>
                <CrownLogo className='logo'/>
            </LogoContainer>
            
            <NavLinksContainer >
                <Link className='nav-links-container' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                    <NavLink as='span' onClick= {signOutUser}>
                        SIGN OUT
                    </NavLink>
                    ) : ( 
                    <NavLink  to='/auth'>
                        SIGN IN
                    </NavLink>
                    )}
                    <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation