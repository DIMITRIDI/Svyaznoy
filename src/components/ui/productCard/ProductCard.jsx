import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { cartActions } from '../../../redux/slice/cartSlice';

import styles from "./ProductCard.module.scss";

const ProductCard = ({ item }) => {
   const dispatch = useDispatch();

   const addToCart = () => {
      dispatch(
         cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
         })
      );

      toast.success("Product added successfully");
   };

   return (
      <Col lg='3' md='4'>
         
            <div className={styles.product__item}>
               <div className={styles.product__img}>
                  <img src={item.imgUrl} alt="product" />
               </div>
               <div className={styles.product__info}>
                  <Link to={`/shop/${item.id}`}>
                     <h3 className={styles.product__name}>{item.productName}</h3>
                  </Link>
                  <span>{item.category}</span>
               </div>
               <div className={styles.product__bottom}>
                  <span className={styles.price}>${item.price}</span>
                  <span className={styles.plus} onClick={addToCart}><FaPlus /></span>
               </div>
            </div>
         
      </Col>
   )
}

export default ProductCard;