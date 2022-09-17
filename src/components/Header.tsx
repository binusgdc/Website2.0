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
                <div className={styles.logo}>
                    <img className={styles.image} src="/logo.png"></img>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav-open`] : {}}`}>
                        <a className={styles.nav__item} href={"/"}>
                            Registration
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Calendars
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Products
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Blog
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            About Us
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Contact Us
                        </a>
                        <div className={styles.nav__button__container}>
                            <Button />
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    )
}

const Button = () => {
    return <button className={styles.button}>Login</button>
}

// const Header = () => {
//     return (
//         <Header>

//         </Header>
//         );
//     }
export default Header
