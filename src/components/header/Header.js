import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import styles from "./Header.module.scss";

const logo = (
   <div className={styles.logo}>
      <NavLink to="/">
         <h2>S<span>vyazno</span>Y</h2>
      </NavLink>
   </div>
);

const cart = (
   <span className={styles.cart}>
      <NavLink to="cart">
         Cart
         <FaShoppingCart size={20}/>
         <p>0</p>
      </NavLink>
   </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : `${styles.inactive}`);

const Header = () => {
   const [showMenu, setShowMenu] = useState(false);

   const toggleMenu = () => {
      setShowMenu(!showMenu);
   };

   const hideMenu = () => {
      setShowMenu(false);
   };

   return (
      <header>
         <div className={styles.header}>
            {logo}
            <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`} >
               <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu} ></div>
               <ul onClick={hideMenu} >
                  <li className={styles["logo-mobile"]} >
                     {logo}
                     <FaTimes size={22} onClick={hideMenu} />
                  </li>
                  <li>
                     <NavLink to="home" className={activeLink} >Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="contact" className={activeLink} >Contact Us</NavLink>
                  </li>
               </ul>
               <div className={styles["header-right"]} onClick={hideMenu} >
                  <span className={styles.links}>
                     <NavLink to="login" className={activeLink} >login</NavLink>
                     <NavLink to="register" className={activeLink} >Register</NavLink>
                     <NavLink to="order-history" className={activeLink} >My Order</NavLink>
                  </span>
                  {cart}
               </div>
            </nav>
            <div className={styles["menu-icon"]}>
               {cart}
               <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
            </div>
         </div>
      </header>
   )
}

export default Header;