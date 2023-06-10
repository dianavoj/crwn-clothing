import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.contexts';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to=''>
                <CrownLogo className='logo'/>
            </Link>
            
            <div className='links-container'>
                <Link className='nav-links-container' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                    <span className='nav-link' onClick= {signOutUser}>
                        SIGN OUT
                    </span>
                    ) : ( 
                    <Link className='nav-links-container' to='/auth'>
                        SIGN IN
                    </Link>
                    )}
                    <CartIcon />
            </div>
            <CartDropdown />
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation