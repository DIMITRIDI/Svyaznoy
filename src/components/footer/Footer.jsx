import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import  { ImLocation }  from 'react-icons/im';
import  { BsFillTelephoneFill, BsEnvelopeFill }  from 'react-icons/bs';

import { logo } from '../header/Header';

import styles from "./Footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Container>
            <Row>
               <Col lg="4">
                  {logo}
                  <p>Always with you: promotions, finding the nearest store, contacting us and a virtual loyalty card.</p>
               </Col>
               <Col lg="3">
                  <div className={styles.footer__links}>
                     <h4 className={styles.footer__title}>Top Categories</h4>
                     <div>
                        <Link to="#">Smartphones</Link>
                        <Link to="#">TV</Link>
                        <Link to="#">Notebook</Link>
                        <Link to="#">Appliances</Link>
                     </div>
                  </div>
               </Col>
               <Col lg="2">
                  <div className={styles.footer__links}>
                     <h4 className={styles.footer__title}>Useful Links</h4>
                     <div>
                        <Link to="/shop">Shop</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/login">Login</Link>
                        <Link to="#">Privacy Policy</Link>
                     </div>
                  </div>
               </Col>
               <Col lg="3">
                  <div className={styles.footer__links}>
                     <h4 className={styles.footer__title}>Contact</h4>
                     <div className={styles.footer__flex}>
                        <span><ImLocation/></span>
                        <p>123000, st. Tverskaya, 15, Moscow, Russia</p>
                     </div>
                     <div className={styles.footer__flex}>
                        <span><BsFillTelephoneFill/></span>
                        <p>+7 095 123 45 67</p>
                     </div>
                     <div className={styles.footer__flex}>
                        <span><BsEnvelopeFill/></span>
                        <p>example123@gmail.com</p>
                     </div>
                  </div>
               </Col>
            </Row>
            <div className={styles.footer__bottom}>&copy; {year} All Rights Reserved. Developed by DIMITRIDIS</div>
         </Container>
      </footer>
   )
};

export default Footer;