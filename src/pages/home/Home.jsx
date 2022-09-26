import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Slider from '../../components/slider/Slider';
import Helmet from '../../components/helmet/Helmet';
import Services from '../../services/Services';
import ProductsList from '../../components/ui/productsList/ProductsList';
import Clock from '../../components/ui/clock/Clock';
import products from '../../assets/data/products';

import counterImg from '../../assets/timer.png';

import styles from "./Home.module.scss";

const Home = () => {
   const [trendingProducts, setTrendingProducts] = useState([]);
   const [bestSalesProducts, setBestSalesProducts] = useState([]);
   const [mobileProducts, setMobileProducts] = useState([]);
   const [wirelessProducts, setWirelessProducts] = useState([]);

   useEffect(() => {
      const filteredTrendingProducts = products.filter(
         (item) => item.category === 'smartphone'
      );

      const filteredBestSalesProducts = products.filter(
         (item) => item.category === 'tv'
      );

      const filteredMobileProducts = products.filter(
         (item) => item.category === 'computer'
      );

      const filteredWirelessProducts = products.filter(
         (item) => item.category === 'appliances'
      );

      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
   }, []);

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
                  <ProductsList data={trendingProducts} />
               </Row>
            </Container>
         </section>
         <section className={styles.timer__count}>
            <Container>
               <Row>
                  <Col lg='6' md='6'>
                     <div className={styles.clock__top}>
                        <h4>Limited Offers</h4>
                     </div>
                     <Clock />
                     <Link to='/shop' className="--btn --btn-primary">Visit Store</Link>
                  </Col>
                  <Col lg='6' md='6' className={styles.text__end}>
                     <img src={counterImg} alt='chair'/>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className={styles.best__sales}>
            <Container>
               <Row>
                  <Col lg='12'>
                     <h2 className={styles.section__title}>Best Sales</h2>
                  </Col>
                  <ProductsList data={bestSalesProducts} />
               </Row>
            </Container>
         </section>
         <section className={styles.new__arrivals}>
            <Container>
               <Row>
                  <Col lg='12'>
                     <h2 className={styles.section__title}>New Arrivals</h2>
                  </Col>
                  <ProductsList data={mobileProducts} />
                  <ProductsList data={wirelessProducts} />
               </Row>
            </Container>
         </section>
      </Helmet>
   )
}

export default Home;