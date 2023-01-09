import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"
import Header from "../components/Header"
import Acara from "../components/Acara"
import Kegiatan from "../components/KegiatanKami"
import JoinBGDC from "../components/JoinBGDC"
import Footer from "../components/Footer"
import GameKami from "../components/GameKami"
function App() {
    return (
        <>
            <Header />
            <Home />
            <Kegiatan />
            <GameKami />
            <Acara />
            <JoinBGDC />
            <Footer />
        </>
    )
}

const Home: NextPage = () => {
    return (
        <div className={styles.gradient}>
            <Head>
                <title>Binus Game Development Club</title>
                <meta name="description" content="BGDC Website" />
                <link rel="icon" href="/images/logo.png" />
            </Head>

            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <div className="px-8 lg:px-auto flex flex-col w-full md:w-2/5 justify-center items-start  md:text-left">
                        <p className="text-white  font-bold tracking-loose w-full my-4">
                            Welcome to BGDC!
                        </p>
                        <div className=" tracking-loose w-full mt-4">
                            <a>
                                <img
                                    src="/images/playobservedevelop.png"
                                    className="h-36 max-w-min"
                                    alt=""
                                />
                            </a>
                        </div>

                        <p className="text-white leading-normal text-xl lg:text-2xl my-8 ">
                            Tempat berkumpulnya para binusian untuk bermain, mengamati, dan
                            mengembangkan game. Kami menawarkan berbagai kursus game development
                            serta tempat untuk bertemu dengan peminat antusias lainnya
                        </p>
                        <div className="max-w-sm md:max-w-md gap-4">
                            <a
                                type="button"
                                href={"/about-us"}
                                className="inline-block px-12 py-5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Tentang BGDC →
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full mx-auto md:w-3/5 py-6 justify-end">
                        <img className="w-full md:w-1/2 z-50 mx-auto" src="/images/Sticker_1.png" />
                    </div>
                </div>
            </div>
            <div className="relative -mt-12 lg:-mt-24">
                <svg
                    viewBox="0 0 1428 174"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                            transform="translate(-2.000000, 44.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                        ></g>
                        <g
                            transform="translate(-4.000000, 76.000000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                        >
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default App
