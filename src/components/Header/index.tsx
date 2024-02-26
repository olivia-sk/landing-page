import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./Header.module.css";

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const toggleDrawer = () => setDrawerOpened(!drawerOpened);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <a href="/" className={classes.logoLink}>
          <img
            src="/logo/MoodBrewLogo.svg"
            alt="Logo"
            className={classes.logo}
          />
          <span className={classes.brandName}>MoodBrew</span>
        </a>
      </div>
      <nav className={classes.navDesktop}>
        <a
          href="/"
          className={`${classes.navLink} ${
            isActive("/") ? classes.active : ""
          }`}
        >
          Home
        </a>
        <a
          href="/teas"
          className={`${classes.navLink} ${
            isActive("/teas") ? classes.active : ""
          }`}
        >
          Teas
        </a>
        <a
          href="/about"
          className={`${classes.navLink} ${
            isActive("/about") ? classes.active : ""
          }`}
        >
          About Us
        </a>
      </nav>
      <div className={classes.authActions}>
        <button className={classes.authButton}>Sign up</button>
        <button className={classes.authButton}>Log in</button>
      </div>

      <button className={classes.burger} onClick={toggleDrawer}>
        ☰
      </button>
      {drawerOpened && (
        <div className={classes.drawer}>
          <button className={classes.closeDrawer} onClick={toggleDrawer}>
            ✕
          </button>
          <a
            href="/"
            className={`${classes.drawerLink} ${
              isActive("/") ? classes.active : ""
            }`}
          >
            Home
          </a>
          <a
            href="/teas"
            className={`${classes.drawerLink} ${
              isActive("/teas") ? classes.active : ""
            }`}
          >
            Teas
          </a>
          <a
            href="/about"
            className={`${classes.drawerLink} ${
              isActive("/about") ? classes.active : ""
            }`}
          >
            About Us
          </a>
          <button className={classes.authButton}>Sign up</button>
          <button className={classes.authButton}>Log in</button>
        </div>
      )}
    </header>
  );
}

export default Header;
