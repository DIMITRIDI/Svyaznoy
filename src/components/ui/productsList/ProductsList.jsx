import React from 'react';

import ProductCard from '../productCard/ProductCard';

import styles from "./ProductList.module.scss";

const ProductsList = ({data}) => {
   return (
      <div className={styles.product__list}>
         {
            data?.map(item => (
               <ProductCard item={item} />
            ))
         }
      </div>
   )
}

export default ProductsList;