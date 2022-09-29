import React from 'react';
import { Container } from 'reactstrap';

import styles from "./CommonSection.module.scss";

const CommonSection = ({ title }) => {
   return (
      <section className={styles.common__section}>
         <Container className='text-center'>
            <h1>{title}</h1>
         </Container>
      </section>
   )
}

export default CommonSection;