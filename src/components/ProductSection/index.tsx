import React from 'react';
import styles from './ProductsSection.module.css';
import Spline from '@splinetool/react-spline';

const ProductsSection = () => {
  return (
    <section id="productsSection" className={styles.products}>
      <h2>Our Signature Blends</h2>
      <div className={styles.productsGrid}>
      {/* Product Card 1 */}
      <div className={styles.productCard}>
        <div className={styles.splineElement}>
          <Spline scene="https://prod.spline.design/EgKbW4jwLaZlVgeH/scene.splinecode" />
        </div>
        <div className={styles.cardContent}>
          <h3>Energize Tea</h3>
          <p>Kickstart your day with our Energize blend, a refreshing mix of green tea, ginseng, and lemon.</p>
          <span>$15.00/mo</span>
        </div>
        <div className={styles.cardActions}>
          <button>Add to Cart</button>
        </div>
      </div>

      {/* Product Card 2 */}
      <div className={styles.productCard}>
        <div className={styles.splineElement}>
          <Spline scene="https://prod.spline.design/jeohSZYDHU1XoBKc/scene.splinecode" />
        </div>
        <div className={styles.cardContent}>
          <h3>Relax Tea</h3>
          <p>Unwind with our Relax blend, a soothing combination of chamomile, lavender, and peppermint.</p>
          <span>$18.00/mo</span>
        </div>
        <div className={styles.cardActions}>
          <button>Add to Cart</button>
        </div>
      </div>

      {/* Product Card 3 */}
      <div className={styles.productCard}>
        <div className={styles.splineElement}>
          <Spline scene="https://prod.spline.design/ngKYC7iMs780slDH/scene.splinecode" />
        </div>
        <div className={styles.cardContent}>
          <h3>Focus Tea</h3>
          <p>Sharpen your mind with our Focus blend, featuring yerba mate, green tea, and rosemary.</p>
          <span>$16.00/mo</span>
        </div>
        <div className={styles.cardActions}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProductsSection;
