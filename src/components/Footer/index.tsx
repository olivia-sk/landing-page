import React from 'react';
import { useRouter } from 'next/router';
import classes from './Footer.module.css';

const isActiveLink = (href: string, pathname: string): boolean => {
  return pathname === href;
};

export default function Footer() {
  const router = useRouter(); 

  return (
    <footer className={classes.footer}>
      <div className={classes.flexContainer}>
        <a href="/" className={classes.logoLink}>
          <img src="/logo/MoodBrewLogo.svg" alt="Mood Brew Logo" className={classes.avatar} />
          <span className={classes.title}>Mood Brew</span>
        </a>
        <div className={classes.linkGroup}>
          <a href="/" className={isActiveLink('/', router.pathname) ? classes.activeLink : classes.link}>
            Home
          </a>
          <a href="/teas" className={isActiveLink('/teas', router.pathname) ? classes.activeLink : classes.link}>
            Teas
          </a>
          <a href="/about" className={isActiveLink('/about', router.pathname) ? classes.activeLink : classes.link}>
            About Us
          </a>
        </div>
      </div>
      <p className={`${classes.border} ${classes.footerText}`}>© MoodBrew</p>
    </footer>
  );
}
