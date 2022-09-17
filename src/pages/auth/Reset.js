import { Link } from 'react-router-dom';

import Card from '../../components/card/Card';

import resetImg from '../../assets/forgot.png';

import styles from './auth.module.scss';

const Reset = () => {
   return (
      <section className={`container ${styles.auth}`} >
         <div className={styles.img}>
            <img src={resetImg} alt="Reset Password" width='400' />
         </div>
         <Card>
            <div className={styles.form}>
               <h2>Reset Password</h2>
               <form>
                  <input type="text" placeholder="Email" required/>
                  <button className='--btn --btn-primary --btn-block'>Reset Password</button>
                  <div className={styles.links}>
                     <p>
                        <Link to="/login">- Login</Link>
                     </p>
                     <p>
                        <Link to="/register">- Register</Link>
                     </p>
                  </div>
               </form>
               <span className={styles.register}>
                  <p>Don't have an account?</p>
                  <Link to="/register">Register</Link>
               </span>
            </div>
         </Card>
      </section>
   )
}

export default Reset;