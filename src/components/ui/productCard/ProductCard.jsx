import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import styles from "./ProductCard.module.scss";

const ProductCard = ({item}) => {
   return (
      <Col lg='3' md='4'>
         <Link to={`/shop/${item.id}`}>
            <div className={styles.product__item}>
               <div className={styles.product__img}>
                  <img src={item.imgUrl} alt="product" />
               </div>
               <div className={styles.product__info}>
                  <h3 className={styles.product__name}>{item.productName}</h3>
                  <span>{item.category}</span>
               </div>
               <div className={styles.product__bottom}>
                  <span className={styles.price}>${item.price}</span>
                  <span className={styles.plus}><FaPlus /></span>
               </div>
            </div>
         </Link>
      </Col>
   )
}

export default ProductCard;