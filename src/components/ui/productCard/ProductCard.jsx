import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import productImg from '../../../assets/spinner.jpg';

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
   return (
      <Col lg='3' md='4'>
         <Link to='/shop/id'>
            <div className={styles.product__item}>
               <div className={styles.product__img}>
                  <img src={productImg} alt="product" />
               </div>
               <div className={styles.product__info}>
                  <h3 className={styles.product__name}>Smartphones and Tablets</h3>
                  <span>Smartphones</span>
               </div>
               <div className={styles.product__bottom}>
                  <span className={styles.price}>$299</span>
                  <span className={styles.plus}><FaPlus /></span>
               </div>
            </div>
         </Link>
      </Col>
   )
}

export default ProductCard;