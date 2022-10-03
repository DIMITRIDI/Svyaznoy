import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '../../components/helmet/Helmet';
import CommonSection from '../../components/ui/сommonSection/CommonSection';
import { cartActions } from '../../redux/slice/cartSlice';

import styles from "./Cart.module.scss";

const Cart = () => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   const totalAmount = useSelector((state) => state.cart.totalAmount);

   return (
      <Helmet title='Cart'>
         <CommonSection title='Shopping Cart'/>
         <section>
            <Container>
               <Row>
                  <Col lg='9'>
                     {cartItems.length === 0 ? ( 
                        <h2 className='fs-4 text-center'>No item added to the Cart</h2>
                     ) : (
                        <table className='table boarder'>
                           <thead>
                              <tr>
                                 <th>Image</th>
                                 <th>Title</th>
                                 <th>Price</th>
                                 <th>Qty</th>
                                 <th>Delete</th>
                              </tr>
                           </thead>
                           <tbody>
                              {cartItems.map((item, index) => (
                                 <Tr item={item} key={index}/>
                              ))}
                           </tbody>
                        </table>
                     )}
                  </Col>
                  <Col lg='3'>
                     <div className='d-flex align-items-center justify-content-between mt-3'>
                        <h6>Subtotal</h6>
                        <span className='fs-4 fw-bold'>${totalAmount}</span>
                     </div>
                     <p className='fs-6 mt-5'>taxes and shipping will calculate in checkout</p>
                     <div>
                        <button className="--btn --btn-primary w-100 mt-4"><Link to='/checkout'>Checkout</Link></button>
                        <button className="--btn --btn-primary w-100 mt-4 color-white"><Link to='/shop'>Continue Shopping</Link></button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </Helmet>
   );
};

const Tr = ({item}) => {
   const dispatch = useDispatch();

   const deleteProduct = () => {
      dispatch(cartActions.deleteItem(item.id))
   };

   return (
      <tr>
         <td className={styles.cart__img}>
            <img src={item.imgUrl} alt="product" />
         </td>
         <td>{item.productName}</td>
         <td>${item.price}</td>
         <td>{item.quantity}px</td>
         <td className={styles.cart__delete} onClick={deleteProduct}><RiDeleteBinLine/></td>
      </tr>
   )
}

export default Cart;