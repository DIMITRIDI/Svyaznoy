import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

import CommonSection from '../../components/ui/сommonSection/CommonSection';
import Helmet from '../../components/helmet/Helmet';
import products from '../../assets/data/products';
import ProductsList from '../../components/ui/productsList/ProductsList';

import styles from "./Shop.module.scss";

const Shop = () => {
   const [productsData, setProductsData] = useState(products);

   const handleFilter = e => {
      const filterValue = e.target.value;
      if (filterValue === 'smartphone') {
         const filteredProducts = products.filter((item) => item.category === 'smartphone');
         setProductsData(filteredProducts);
      }
      if (filterValue === 'computer') {
         const filteredProducts = products.filter((item) => item.category === 'computer');
         setProductsData(filteredProducts);
      }
      if (filterValue === 'notebook') {
         const filteredProducts = products.filter((item) => item.category === 'notebook');
         setProductsData(filteredProducts);
      }
      if (filterValue === 'tv') {
         const filteredProducts = products.filter((item) => item.category === 'tv');
         setProductsData(filteredProducts);
      }
      if (filterValue === 'appliances') {
         const filteredProducts = products.filter((item) => item.category === 'appliances');
         setProductsData(filteredProducts);
      }
   };

   const handleSearch = e => {
      const searchTerm = e.target.value;
      const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
      setProductsData(searchedProducts);
   }

   return (
      <Helmet title='Shop'>
         <CommonSection title='Products'/>
         <section>
            <Container>
               <Row>
                  <Col lg='3' md='3'>
                     <div className={styles.filter__widget}>
                        <select onChange={handleFilter} >
                           <option>Filter By Category</option>
                           <option value="smartphone">Smartphone</option>
                           <option value="computer">Computer</option>
                           <option value="notebook">Notebook</option>
                           <option value="tv">TV</option>
                           <option value="appliances">Appliances</option>
                        </select>
                     </div>
                  </Col>
                  <Col lg='3' md='3'>
                     <div className={styles.filter__widget}>
                        <select>
                           <option>Sort By</option>
                           <option value="ascending">Ascending</option>
                           <option value="descending">Descending</option>
                        </select>
                     </div>
                  </Col>
                  <Col lg='6' md='6'>
                     <div className={styles.search__box}>
                        <input type='text' placeholder='Search...' onChange={handleSearch}/>
                        <span><FaSearch size={16}/></span>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className={styles.shop__section}>
            <Container>
               <Row>
                  {productsData.length === 0? (
                     <h2>No products are found!</h2>
                  ) : (
                     <ProductsList data={productsData} />
                  )}
               </Row>
            </Container>
         </section>
      </Helmet>
   )
}

export default Shop;