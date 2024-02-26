import React from 'react';
import Spline from '@splinetool/react-spline';
import styles from './HeroSection.module.css';

const HeroSection = () => {

  const scrollToProducts = () => {
    const productsElement = document.getElementById('productsSection');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.splineContainer}>
        <Spline scene="https://prod.spline.design/MkseMOclx8Lylr5G/scene.splinecode" />
      </div>
      <div className={styles.heroContent}>
        <h1>Welcome to MoodBrew</h1>
        <p>From energizing mornings to relaxing evenings, our teas are crafted to suit every part of your day.</p>
        <button onClick={scrollToProducts}>Explore Our Collection</button>
      </div>
    </section>
  );
};

export default HeroSection;
