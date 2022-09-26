import React from 'react';

import ProductCard from '../productCard/ProductCard';

const ProductsList = ({data}) => {
   return (
      <>
         {
            data?.map(item => (
               <ProductCard item={item} />
            ))
         }
      </>
   )
}

export default ProductsList;