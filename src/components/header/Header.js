import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { auth } from '../../firebase/config';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";

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
   const [displayName, setDisplayName] = useState("");
   const navigate = useNavigate();

   const dispatch = useDispatch();

   // Monitor currently sign in user
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            // console.log(user);
            if (user.displayName == null) {
               const u1 = user.email.substring(0, user.email.indexOf("@"));
               const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
               setDisplayName(uName);
            } else {
               setDisplayName(user.displayName);
            }

            dispatch(SET_ACTIVE_USER({
               email: user.email,
               userName: user.displayName ? user.displayName : displayName,
               userID: user.uid,
            }))
         } else {
            setDisplayName("");
            dispatch(REMOVE_ACTIVE_USER());
         }
      });
   }, [dispatch, displayName]);

   const toggleMenu = () => {
      setShowMenu(!showMenu);
   };

   const hideMenu = () => {
      setShowMenu(false);
   };

   const logoutUser = () => {
      signOut(auth).then(() => {
         toast.success("Logout Successfully.");
         navigate("/");
      }).catch((error) => {
         toast.error(error.message);
      });
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
                     <NavLink to="/home" className={activeLink} >Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/contact" className={activeLink} >Contact Us</NavLink>
                  </li>
               </ul>
               <div className={styles["header-right"]} onClick={hideMenu} >
                  <span className={styles.links}>
                     <ShowOnLogout>
                        <NavLink to="login" className={activeLink} >login</NavLink>
                     </ShowOnLogout>
                     <ShowOnLogin>
                        <a href='#home' style={{color: "#ff7722"}}>
                           <FaUserCircle size={16}/>
                           Hi, {displayName}
                        </a>
                     </ShowOnLogin>
                     <ShowOnLogin>
                        <NavLink to="order-history" className={activeLink} >My Order</NavLink>
                     </ShowOnLogin>
                     <ShowOnLogin>
                        <NavLink to="/" onClick={logoutUser} >Logout</NavLink>
                     </ShowOnLogin>
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