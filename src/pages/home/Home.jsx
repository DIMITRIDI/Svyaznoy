import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Slider from '../../components/slider/Slider';
import Helmet from '../../components/helmet/Helmet';
import Services from '../../services/Services';
import ProductsList from '../../components/ui/productsList/ProductsList';

import styles from "./Home.module.scss";

const Home = () => {
   return (
      <Helmet title={"Home"}>
         <Slider />
         <Services />
         <section className={styles.trending__products}>
            <Container>
               <Row>
                  <Col lg='12'>
                     <h2 className={styles.section__title}>Trending Products</h2>
                  </Col>
                  <ProductsList/>
               </Row>
            </Container>
         </section>
      </Helmet>
   )
}

export default Home;