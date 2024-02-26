import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import styles from './SubBannerSection.module.css';

const SubBannerSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section className={styles.subBanner}>
      <div className={styles.splineElement}>
        <Spline scene="https://prod.spline.design/tD7FpOArPfLpYKl5/scene.splinecode" /> 
      </div>
      
      <h2>Join the MoodBrew Community</h2>
      <p>
        Be the first to know about new blends, exclusive offers, and tips for
        enhancing your tea experience.
      </p>
      
      <form className={styles.subscribeForm}>
        <input
          type="email"
          className={styles.emailInput}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubBannerSection;
