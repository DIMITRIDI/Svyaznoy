import React from 'react';

import ProductCard from '../productCard/ProductCard';

import styles from "./ProductsList.module.scss";

const ProductsList = ({data}) => {
   return (
      <div className={styles.product__list}>
         {
            data?.map((item, index) => (
               <ProductCard item={item} key={index}/>
            ))
         }
      </div>
   )
}

export default ProductsList;