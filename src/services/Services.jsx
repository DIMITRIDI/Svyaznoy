import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { GrDeliver } from 'react-icons/gr';
import { GiReturnArrow, GiReceiveMoney } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

import serviceData from '../assets/data/serviceData';

import styles from "./Services.module.scss";

const icons = [
   GrDeliver,
   GiReturnArrow,
   AiFillSafetyCertificate,
   GiReceiveMoney,
];

const Services = () => {
   return (
      <section className={styles.services}>
         <Container>
            <Row>
               {
                  serviceData.map((item, idx) => {
                     const Icon = icons[idx];
                     return (
                        <Col lg='3' md='4' key={idx}>
                           <div className={styles.services__item} style={{ background: `${item.bg}` }}>
                              <span><Icon /></span>
                              <div>
                                 <h3>{item.title}</h3>
                                 <p>{item.subtitle}</p>
                              </div>
                           </div>
                        </Col>
                  )})
               }
            </Row>
         </Container>
      </section>
   )
}

export default Services;