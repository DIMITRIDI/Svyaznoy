import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import products from '../../assets/data/products';
import Helmet from '../../components/helmet/Helmet';
import CommonSection from '../../components/ui/сommonSection/CommonSection';
import ProductsList from '../../components/ui/productsList/ProductsList';
import { cartActions } from '../../redux/slice/cartSlice';

import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
   const [tab, setTab] = useState('desc');
   const [rating, setRating] = useState(null);

   const reviewUser = useRef('');
   const reviewMsg = useRef('');

   const dispatch = useDispatch();

   const {id} = useParams();
   const product = products.find(item => item.id === id);

   const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

   const relatedProducts = products.filter((item) => item.category === category);

   const submitHandler = (e) => {
      e.preventDefault();

      const reviewUserName = reviewUser.current.value;
      const reviewUserMsg = reviewMsg.current.value;

      const reviewObj = {
         userName: reviewUserName,
         text: reviewUserMsg,
         rating,
      };

      console.log(reviewObj);
      toast.success('Review submitted');
   };

   const addToCart = () => {
      dispatch(
         cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,
         })
      );

      toast.success("Product added succesfully!");
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [product]);

   return (
      <Helmet title={productName}>
         <CommonSection title={productName}/>
         <section>
            <Container>
               <Row>
                  <Col className='m-auto' lg='6'>
                     <div className={styles.product__img} >
                        <img src={imgUrl} alt='product'/>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className={styles.product__details}>
                        <h2>{productName}</h2>
                        <div className={styles.product__rating}>
                           <div>
                              <span><BsStarFill/></span>
                              <span><BsStarFill/></span>
                              <span><BsStarFill/></span>
                              <span><BsStarFill/></span>
                              <span><BsStarHalf/></span>
                           </div>
                           <p>(<span>{avgRating}</span> ratings)</p>
                        </div>
                        <div className={styles.product__wrapper}>
                           <span className={styles.product__price}>${price}</span>
                           <span>Category: {category}</span>
                        </div>
                        <p className={styles.product__short}>{shortDesc}</p>
                        <button onClick={addToCart} className="--btn --btn-primary">Add to Cart</button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section>
            <Container>
               <Row>
                  <Col lg='12'>
                     <div className={styles.tab__wrapper}>
                        <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                        <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                     </div>
                     {
                        tab === 'desc' ? (
                           <div className={styles.tab__contetnt}>
                              <p>{description}</p>
                           </div>
                        ) : (
                           <div className={styles.product__review}>
                              <div className={styles.review__wrapper}>
                                 <ul>
                                    {reviews?.map((item, index) => (
                                       <li key={index}>
                                          <h6>Anna Kerrigan</h6>
                                          <span>{item.rating} (average rating)</span>
                                          <p>{item.text}</p>
                                       </li>
                                    ))}
                                 </ul>
                                 <div className={styles.review__form}>
                                    <h4>Leave your experience</h4>
                                    <form action='' onSubmit={submitHandler}>
                                       <div className={styles.form__group}>
                                          <input type="text" placeholder="Enter Name" ref={reviewUser} required/>
                                       </div>
                                       <div className={styles.form__group}>
                                          <span onClick={() => setRating(1)}>1<BsStarFill/></span>
                                          <span onClick={() => setRating(2)}>2<BsStarFill/></span>
                                          <span onClick={() => setRating(3)}>3<BsStarFill/></span>
                                          <span onClick={() => setRating(4)}>4<BsStarFill/></span>
                                          <span onClick={() => setRating(5)}>5<BsStarFill/></span>
                                       </div>
                                       <div className={styles.form__group}>
                                          <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message..." required/>
                                       </div>
                                       <button type="submit" className="--btn --btn-primary">Submit</button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </Col>
                  <Col lg='12' className='mt-5 mb-5'>
                     <h2 className={styles.related__title}>You might also like</h2>
                  </Col>
                  <ProductsList data={relatedProducts}/>
               </Row>
            </Container>
         </section>
      </Helmet>
   )
}

export default ProductDetails;