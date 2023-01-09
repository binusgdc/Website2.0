import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import VisiMisi from "../components/About_VisiMisi"
import Aktivitas from "../components/About_Aktivitas"
import PengurusBGDC from "../components/About_Pengurus"
function About() {
    return (
        <>
            <Header />
            <AboutPage />
            <VisiMisi />
            <Aktivitas />
            <PengurusBGDC />
            <Footer />
        </>
    )
}

const AboutPage: NextPage = () => {
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
export default About
