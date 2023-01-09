import styles from "../styles/Header.module.scss"
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { useState } from "react"
import React from "react"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuToggler = () => setMenuOpen((p) => !p)

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <a className={styles.logo} href={"/"}>
                    <img className={styles.image} src="/images/logo.png"></img>
                </a>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav-open`] : {}}`}>
                        {/* <a className={styles.nav__item} href={"/"}>
                            Registration
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Products
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Calendars
                        </a> */}
                        <a className={styles.nav__item} href={"/"}>
                            Home
                        </a>
                        {/* <a className={styles.nav__item} href={"/blog"}>
                            Blog
                        </a> */}
                        <a className={styles.nav__item} href={"/about-us"}>
                            About Us
                        </a>
                        <a className={styles.nav__item} href={"/contactus"}>
                            Contact Us
                        </a>
                        <div className={styles.nav__button__container}>{/* <Button /> */}</div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>{/* <Button /> */}</div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
