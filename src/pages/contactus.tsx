import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Alamat from "../components/ContactUs_Alamat"
import Connect from "../components/ContactUs_Connect"
import GetTouch from "../components/ContactUs_GetTouch"

function Contact() {
    return (
        <>
            <Header />
            <ContactPage />
            <GetTouch />
            <Alamat />
            <Connect />
            <Footer />
        </>
    )
}

const ContactPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Binus Game Development Club</title>
                <meta name="description" content="BGDC Website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>
        </div>
    )
}
export default Contact
