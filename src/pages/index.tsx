import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Header from "../components/Header"
import Connect from "../components/Connect"
import Alamat from "../components/Alamat"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

function App() {
    return (
        <>
            <Header />
            <ContactUs />
            <Alamat />
            <Connect />
            <Footer />
        </>
    )
}

export default App
