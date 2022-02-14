import classes from '../res/layout/header.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ShopingCart from './ShopingCart';

const Header = () => {
    const [shopingCart, setShopingCart] = useState(false);
    

    const openCart = () => setShopingCart(true);
    
    return(
        <div className={classes.headerContainer}>
            <div className={classes.logo}>
                <h1>SHOES STORE</h1>
            </div>
            <nav className={classes.nav}>
                <NavLink to='/' className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}>Home</NavLink>
                <NavLink to='/shop' className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}>Shop</NavLink>
                <NavLink to='/contact' className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}>Contact</NavLink>
                <div id='shoping-cart-container'>
                <span id='item-number'></span>
                <FontAwesomeIcon icon={faCartShopping} onClick={openCart}/>
                </div>
            </nav>
            {(shopingCart === true) ?<ShopingCart props={setShopingCart} /> : null}
        </div>
    )
}

export default Header;