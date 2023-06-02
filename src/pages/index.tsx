import MainLayout from "../layouts/MainLayouts"
import styles from "../styles/Home.module.scss"
import Image from "next/image"
import CSS from "csstype"
import AgateImg from "/public/images/agate.png"
import H2LImg from "/public/images/h2l.png"
import { TestimonialProps } from "../components/Testimonial"
import Testimonial from "../components/Testimonial"

const gameKamiCssProperties: CSS.Properties = {
    display: '"flex"',
    backgroundColor: "#F9F9F9",
    height: "fit-content",
    minHeight: "1260px",
    overflow: "hidden",
}

const testimonialsStatic: TestimonialProps[] = [
    {
        personName: "Arfiana Maulina",
        personTitle: "Community Member",
        profileImagePath: "/images/testimony_img/Arfiana Maulina.jpeg",
        statement: `I am not a gamer, nor a player. How can I work at two-award
        winning Indie Games Studio and part of the organizer of GameDev
        Community? As a marketer, I am happy to expand the Game to the
        International Market that will help to drive sales. Thanks to
        BGDC to introduce me the basic about GameDev, another level of
        my Marketing is unlocked! Hope will have a Marketing curriculum
        there to making more impact on the product.`,
    },
    {
        personName: "Vanessa Angelique Wiria",
        personTitle: "Talent Group Member",
        profileImagePath: "/images/testimony_img/Or1on.jpg",
        statement: `Talent group seru banget, makin banyak yang ikut ya biar makin
        goks!!`,
    },
    {
        personName: "Robertus Eric",
        personTitle: "BGDC Class Member",
        profileImagePath: "/images/pengurus_img/Robertus Eric 2.jpg",
        statement: `Kelas BGDC sangat membantu saya dalam memahami hal-hal mengenai
        game development. Saya sendiri mengikuti kelas 2D Art BGDC dan
        menurut saya, kelas tersebut seru dan membantu saya dalam
        memahami konsep-konsep 2D Art, terutama 2D Art untuk
        pengembangan game.`,
    },
    {
        personName: "Arkannabil Pratama",
        personTitle: "Partner",
        profileImagePath: "/images/testimony_img/Mordsven.jpg",
        statement: `Saya dari Tim PR NC sangat senang selama ini bekerja sama dengan
        BGDC dan untuk sejauh ini tim kami belum pernah mengalami
        masalah saat bekerja sama dengan BGDC, kami berharap kedepannya
        NC dan BGDC dapat bekerja sama lagi.`,
    },
    {
        personName: "Pom-Pom",
        personTitle: "Talent Group Member",
        profileImagePath: "/images/testimony_img/copium.png",
        statement: `Dengan adanya talent group, saya dapat mengenali banyak koneksi
        serta cara kerja time crunch dalam mengerjakan projek dengan tim
        saya.`,
    },
    {
        personName: "Vetri Marvel Budiman",
        personTitle: "Talent Group Member",
        profileImagePath: "/images/pengurus_img/Vetri Marvel Budiman 2 edited.png",
        statement: `Jadi saya suka bebek dan karena saya bikin game bebek, saya
        sudah bisa bikin model bebek-bebek keren. Sebagai bonus saya
        dapat membuat animasi bebek. Aku senang sekali bisa membuat
        bebek di blender dan melihat bebek saya bergerak di dalam game
        😳😳👍`,
    },
]

export default function App() {
    return (
        <MainLayout title="Binus Game Development Club">
            <div className="relative">
                <div className={`-z-20 absolute w-full h-full ${styles.gradient}`}></div>
                <div className={`pt-24 pb-12`}>
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="px-8 lg:px-auto flex flex-col w-full md:w-2/5 justify-center items-start  md:text-left">
                            <p className="text-white  font-bold tracking-loose w-full my-4">
                                Welcome to BGDC!
                            </p>
                            <div className=" tracking-loose w-full mt-4">
                                <a>
                                    <Image
                                        src="/images/playobservedevelop.png"
                                        className="h-36 max-w-min"
                                        alt=""
                                        width={221}
                                        height={144}
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

                        <div className="flex w-full mx-auto md:w-3/5 py-6 justify-center">
                            <Image
                                className="w-full md:w-1/2 z-50 mx-auto"
                                src="/images/Sticker_1.png"
                                width={454}
                                height={454}
                            />
                        </div>
                    </div>
                </div>
                <div
                    // className="relative -mt-12 lg:-mt-24"
                    className="-z-10 absolute bottom-0 w-full"
                >
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
            <div className="pt-10 container:md mx-auto mt-8  ">
                <div className="hidden lg:grid lg:max-w-3xl max-w-xs  text-center mx-auto items-center  grid-cols-2 lg:grid-cols-4 gap-4 mb-20 mt-12">
                    <a
                        type="button"
                        className="inline-block px-4 py-5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        href="#BGDC_Kegiatan"
                    >
                        Kegiatan Kami
                    </a>
                    <a
                        type="button"
                        className="inline-block px-4 py-5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        href="#BGDC_GameKami"
                    >
                        Game BGDC
                    </a>
                    <a
                        type="button"
                        className="inline-block px-4 py-5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        href="#BGDC_Acara"
                    >
                        Acara Kami
                    </a>

                    <a
                        type="button"
                        className="inline-block px-4 py-5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                        href="#BGDC_Join"
                    >
                        Join Member BGDC!
                    </a>
                </div>
            </div>
            <div id="BGDC_Kegiatan"></div>
            <div className="container max-w-6xl mx-auto m-8">
                <div className=" px-8 lg:px-auto text-center m-4">
                    <h1 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                        Kegiatan Kami
                    </h1>
                    <p className="text-sm md:text-base font-bold">
                        Berbagai macam kegiatan yang dapat dilakukan member BGDC
                    </p>
                </div>

                <div className="px-8 lg:px-auto m-4 grid grid-cols-2 gap-8 sm:grid-cols-3 ">
                    <div className="text-center pt-8 ">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/hat.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <a className="mb-4 font-semibold break-normal text-xs">Ikuti</a>
                        <h1 className="mb-4 font-bold break-normal text-lg ">BGDC Class</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Kelas rutin game development untuk pelajar.
                        </p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/sparkle.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <a className="mb-4 font-semibold break-normal text-xs">
                            Bikin Game Bersama
                        </a>
                        <h1 className="mb-4 font-bold break-normal text-lg ">Talent Group</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Program mentoring untuk membuat game dengan kelompok.
                        </p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/globe.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <a className="mb-4 font-semibold break-normal text-xs">
                            Berpartisipasi Dalam
                        </a>
                        <h1 className="mb-4 font-bold break-normal text-lg ">Networking</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Kenalan dengan orang-orang di industri game development.
                        </p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/controller.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h1 className="mb-4 font-bold break-normal text-lg ">Gathering</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Kumpul bareng sesama member BGDC.
                        </p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/trophy.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h1 className="mb-4 font-bold break-normal text-lg ">Game Time</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Kelompok lomba gamejam BGDC untuk event internasional.
                        </p>
                    </div>

                    <div className="text-center pt-8">
                        <div className="pb-4 ml-auto mr-auto max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                src={"/images/calendar.png"}
                                className="rounded-xl object-cover max-h-64"
                                alt="where image"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h1 className="mb-4 font-bold break-normal text-lg ">Public Events</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Menjadi panitia membantu menyelenggarakan acara umum.
                        </p>
                    </div>
                </div>

                <div className="align-top grid grid-cols-3 divide-x mt-8 md:mt-16">
                    <div className="text-center ">
                        <p className="text-sm md:text-base font-semibold">Courses</p>
                        <h1 className="m-4 font-bold break-normal text-3xl md:text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-start-gradient to-end-gradient">
                            5
                        </h1>
                    </div>

                    <div className="text-center ">
                        <p className="text-sm md:text-base font-bold">Active Members</p>
                        <h1 className="m-4 font-bold break-normal text-3xl md:text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-start-gradient to-end-gradient">
                            ~300
                        </h1>
                    </div>

                    <div className="text-center ">
                        <p className="text-sm md:text-base font-bold">Staff</p>
                        <h1 className="m-4 font-bold break-normal text-3xl md:text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-start-gradient to-end-gradient">
                            46
                        </h1>
                    </div>
                </div>
            </div>
            <div id="BGDC_GameKami"></div>
            <div className="relative" style={gameKamiCssProperties}>
                <div className="pt-10 flex justify-center lg:flex-row flex-col  items-center align-top">
                    <div className="mr-8 ml-8 w-[350px] lg:w-[500px] flex justify-center flex-col items-center text-center">
                        <h1 className="text-[24pt] font-bold ">Game Kami</h1>
                        <p className="">
                            Game yang kami buat untuk game jam serta game dari hasil Talent Group
                            BGDC
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-shrink-0 w-full h-full justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex flex-shrink-0 w-full h-full justify-center flex-col items-center mt-[120px] lg:mt-[90px] mr-[160px] lg:mr-[620px]">
                            <Image
                                src={"/images/logo1.png"}
                                alt="photo"
                                width={112}
                                height={112}
                                className="z-10"
                            />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-96 -translate-y-1/2 mt-[100px] lg:mt-[225px] lg:ml-[0px] ml-[240px] lg:w-[440px] w-[290px] overflow-hidden text-sm bg-white rounded-3xl ">
                        <p className="overflow-hidden pl-8 pt-[40px] lg:pt-16 lg:ml-[0px] ml-[80px] lg:pb-[0px] pb-[80px] lg:text-3xl text-[12pt] font-bold">
                            CHAOS WEEKLY
                        </p>
                        <p className="hidden lg:block overflow-hidden pl-8 pt-5 w-[370px]">
                            Play as a magazine ediot, trying to get money by making covers and
                            headlines. Make the world chaotic with the power of hoax for raking in
                            the cash, but going overboard will get you in trouble!
                        </p>
                        <p className="overflow-hidden pl-[113px] lg:pl-8 mt-[-70px] lg:mt-4 font-bold">
                            Game dibuat untuk:
                        </p>
                        <p className="overflow-hidden text-[10pt] lg:text-[11pt] pl-[113px] mb-[90px] lg:mb[0px] lg:pl-8 font-bold text-yellow-400">
                            Brackeys Game Jam 2020.2
                        </p>
                        <div className="flex px-8 pb-3 items-center">
                            <button className="w-[150px] hidden lg:block h-full flex-shrink-0 bg-gradient-to-b from-orange-400 to-yellow-400 text-white mt-[-100px] font-bold px-4 rounded-full">
                                {/* Lihat di Itch.io */}
                            </button>
                            <div className="hidden lg:block w-full h-full flex-shrink-0 mt-[-180px] ml-[70px]">
                                <Image
                                    src={"/images/unity.png"}
                                    alt="photo"
                                    width={146}
                                    height={98}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex w-[140px] lg:w-full justify-center flex-col items-center mt-[-5px] lg:mt-[-120px] ml-[-140px] lg:ml-[100px]">
                            <Image
                                src={"/images/report.png"}
                                alt="photo"
                                width={278}
                                height={170}
                                className="z-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex w-[216px] lg:w-full justify-center flex-col items-center mt-[-87px] lg:mt-[-45px] ml-[70px] lg:ml-80 pl-20">
                            <Image
                                src={"/images/pic2.png"}
                                alt="photo"
                                width={404}
                                height={241}
                                className=""
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex w-[216px] lg:hidden justify-center flex-col items-center mt-[-305px] ml-[150px] pl-20">
                            <Image
                                src={"/images/shop.png"}
                                alt="photo"
                                width={27}
                                height={23}
                                className=""
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex flex-shrink-0 w-[450px] lg:block hidden justify-center flex-col items-center mt-[-300px] ml-[1480px]">
                            <Image
                                src={"/images/hex1.png"}
                                alt="photo"
                                width={507}
                                height={507}
                                className="bg-icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex flex-shrink-0 w-[270px] lg:block hidden justify-center flex-col items-center mt-[120px] ml-[-1550px]">
                            <Image
                                src={"/images/hex2.png"}
                                alt="photo"
                                width={320}
                                height={320}
                                className="bg-icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex flex-shrink-0 w-[450px] lg:block hidden justify-center flex-col items-center mt-[410px] ml-[1530px]">
                            <Image
                                src={"/images/hex1.png"}
                                alt="photo"
                                width={446}
                                height={446}
                                className="bg-icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-shrink-0 w-full h-full justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="absolute left-1/2 mt-[290px] lg:mt-[-2455px] ml-[40px] lg:ml-[10px]">
                            <Image
                                src={"/images/logo2.png"}
                                alt="photo"
                                width={112}
                                height={112}
                                className="z-10"
                            />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-96 -translate-y-1/2 mt-[40px] lg:mt-[-1075px] lg:ml-[380px] ml-[240px] lg:w-[440px] w-[290px] overflow-hidden text-sm bg-white rounded-3xl">
                        <p className="overflow-hidden pl-8 pt-[40px] lg:pt-16 lg:ml-[0px] ml-[-20px] lg:pb-[0px] pb-[80px] lg:text-3xl text-[12pt] font-bold">
                            The Cursed Wheep
                        </p>
                        <p className="overflow-hidden hidden lg:block pl-8 pt-5 w-[350px]">
                            Help the Wolf and the Sheep break the curse in the mysterious forest, in
                            this simple yet amusing platformer developed by BGDC.
                        </p>
                        <p className="overflow-hidden pl-8 pt-4 font-bold ml-[-20px] lg:ml-[0px] mt-[-90px] lg:mt-[0px]">
                            Game dibuat untuk:
                        </p>
                        <p className="overflow-hidden pl-8 ml-[-20px] lg:ml-[0px] pb-[110px] lg:pb-[0px] font-bold text-amber-400">
                            GMTK Game Jam 2021
                        </p>
                        <button className="hidden lg:block bg-gradient-to-b from-orange-400 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold px-4 rounded-full mt-[20px]">
                            {/* Lihat di Itch.io */}
                        </button>

                        <div className="relative">
                            <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                                <div className="flex w-[216px] lg:hidden justify-center flex-col items-center mt-[-340px] ml-[-15px] pl-20">
                                    <Image
                                        src={"/images/shop.png"}
                                        alt="photo"
                                        width={27}
                                        height={23}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 ml-[230px] mt-[30px] hidden lg:block">
                            <Image
                                src={"/images/unity.png"}
                                alt="photo"
                                width={146}
                                height={98}
                                className=""
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                            <div className="flex w-[216px] lg:w-full justify-center flex-col items-center mt-[200px] lg:mt-[-2225px] ml-[70px] lg:ml-[-530px] pl-20">
                                <Image
                                    src={"/images/pic3.png"}
                                    alt="photo"
                                    width={404}
                                    height={241}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                            <div className="flex w-[216px] lg:w-full justify-center flex-col items-center mt-[-80px] lg:mt-[-1940px] ml-[-210px] lg:ml-[-310px] pl-20">
                                <Image
                                    src={"/images/wheep.png"}
                                    alt="photo"
                                    width={278}
                                    height={170}
                                    className="z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex flex-shrink-0 w-full h-full justify-center lg:flex-row flex-col  items-center align-top">
                        <div className="flex flex-shrink-0 w-full h-full justify-center flex-col items-center mt-[90px] lg:mt-[-1490px] mr-[160px] lg:mr-[370px]">
                            <Image
                                src={"/images/logo3.png"}
                                alt="photo"
                                width={112}
                                height={112}
                                className="z-10"
                            />
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-96 -translate-y-1/2 mt-[45px] lg:mt-[-560px] lg:ml-[130px] ml-[240px] lg:w-[400px] w-[290px] overflow-hidden text-sm bg-white rounded-3xl">
                        <p className="overflow-hidden pl-8 pt-[40px] lg:pt-14 lg:ml-[0px] ml-[85px] lg:pb-[0px] pb-[80px] lg:text-3xl text-[12pt] font-bold">
                            Hell Dodge
                        </p>
                        <p className="overflow-hidden hidden lg:block pl-8 pt-5 w-[350px]">
                            Hell Dodge is an event organized by Satan and sponsored by God Himself!
                            Participants will need to endure the rains of arrows and cannonballs for
                            as long as they can. Whoever last the longest would win and be bestowed
                            upon a reward that their heart desires.
                        </p>
                        <p className="overflow-hidden pl-[117px] lg:pl-8 pt-[0px] lg:pt-4 mt-[-75px] lg:mt-[0px] font-bold">
                            Game dibuat untuk:
                        </p>
                        <p className="overflow-hidden pl-8 pb-[120px] lg:pb-[70px] ml-[85px] text-[9pt] lg:ml-[0px] font-bold text-yellow-400">
                            Talent Group BGDC Batch 2
                        </p>

                        <button className="hidden lg:block bg-gradient-to-b from-orange-400 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold px-4 rounded-full mt-[-45px]">
                            {/* Lihat di Itch.io */}
                        </button>

                        <div className="absolute top-1/2 ml-[190px] mt-[62px] hidden lg:block">
                            <Image
                                src={"/images/unity.png"}
                                alt="photo"
                                width={146}
                                height={98}
                                className=""
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                            <div className="flex w-[216px] lg:hidden justify-center flex-col items-center mt-[-150px] ml-[90px] pl-20">
                                <Image
                                    src={"/images/shop.png"}
                                    alt="photo"
                                    width={27}
                                    height={23}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                            <div className="flex w-[216px] lg:w-full justify-center flex-col items-center mt-[0px] lg:mt-[-1260px] ml-[70px] lg:ml-[-800px] pl-20">
                                <Image
                                    src={"/images/charselect.png"}
                                    alt="photo"
                                    width={278}
                                    height={170}
                                    className="z-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-center lg:flex-row flex-col  items-center align-top">
                            <div className="flex w-[216px] lg:w-full justify-center flex-col items-center mt-[-83px] lg:mt-[-1040px] ml-[-210px] lg:ml-[540px] pl-20">
                                <Image
                                    src={"/images/pic4.png"}
                                    alt="photo"
                                    width={404}
                                    height={241}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* <button className="hidden lg:block bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold py-2 px-4 rounded-full mt-[-45px]">
                        Lihat di Itch.io
                    </button> */}

                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-[-350px]">
                        <div className="flex-shrink-0 w-[170px] lg:w-[200px] mr-24 ml-[100px] lg:ml-8 mt-[450px] lg:mt-10">
                            <a
                                className="text-[10pt] lg:text-[12pt] bg-gradient-to-b from-orange-400 to-yellow-400 text-white  font-bold pl-6 pr-6 py-4 px-4 rounded-3xl"
                                href="https://bgdc.itch.io/"
                            >
                                Lihat Game Kami →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white ">
                <div className="pt-10 container max-w-5xl mx-auto m-8" id="BGDC_Acara">
                    <div className="text-center m-4 ">
                        <h1 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800">
                            Acara BGDC
                        </h1>
                        <p className="text-sm md:text-base font-bold">
                            Acara-Acara yang telah dilaksanakan BGDC di tahun 2021
                        </p>
                    </div>

                    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white m-12 mb-12 md:mb-4">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                            <Image
                                src="/images/bgdjam.png"
                                alt="bgdjam test"
                                className="rounded-xl object-cover "
                                width={390}
                                height={200}
                            />
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            <div className="flex justify-between item-center">
                                <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium hidden md:block">
                                    Gamejam
                                </div>
                            </div>
                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                BGDJam 2021
                            </h3>
                            <p className="md:text-lg text-gray-500 text-base">19 Aug 2021</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-8 md:mb-4">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                            <Image
                                src="/images/learn.png"
                                alt="bgdjam test"
                                className="rounded-xl object-cover "
                                width={390}
                                height={200}
                            />
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            <div className="flex justify-between item-center">
                                <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium hidden md:block">
                                    Webinar with Fahmi ツ
                                </div>
                            </div>
                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                How to Start Learning and Developing a Game
                            </h3>
                            <p className="md:text-lg text-gray-500 text-base">28 May 2021</p>
                        </div>
                    </div>
                    {/* <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-8 md:mb-4">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                            <Image
                                src="/images/black.webp"
                                alt="bgdjam test"
                                className="rounded-xl object-cover "
                                width={390}
                                height={200}
                            />
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            <div className="flex justify-between item-center">
                                <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium hidden md:block">
                                    Event Type
                                </div>
                            </div>
                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                Event Name
                            </h3>
                            <p className="md:text-lg text-gray-500 text-base">Event Date</p>
                        </div>
                    </div> */}

                    <div className="text-center m-8 ">
                        <p className="text-base font-bold">Program Kerja BGDC</p>
                    </div>
                    <div className="container:md mx-auto m-8  ">
                        <div className="md:max-w-screen-lg max-w-xs  text-center mx-auto items-center grid grid-cols-2 lg:grid-cols-5 gap-4 m-8">
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Programs here
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Game Convention
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Seminars
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Talent Incubation*
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Company Visit
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Welcoming Party*
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Game Festival
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Member Recruitment
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Onboarding*
                            </div>
                            <div className="inline-block px-6 py-2.5 bg-light_yellow text-txt_yellow font-medium text-xs leading-tight rounded-full shadow-md">
                                Study Tour*
                            </div>
                        </div>
                        <div className="text-center m-4 ">
                            <p className="text-sm">*Untuk member BGDC</p>
                        </div>
                    </div>

                    <div className="text-center m-4 ">
                        <p className="text-base font-bold">Partner Lampau BGDC</p>
                    </div>
                    <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 grid grid-cols-2 md:max-w-screen-md max-w-xs ">
                        <Image width={200} height={200} src={AgateImg} alt="Agate" />
                        <Image src={H2LImg} alt="H2L" />
                    </div>
                </div>
            </section>
            <section className="bg-alt_background">
                <div className="pt-10 container max-w-5xl mx-auto mt-8" id="BGDC_Join">
                    <div className="text-center m-4">
                        <h1 className="m-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                            Join Member BGDC
                        </h1>
                        <p className="text-sm md:text-base font-bold">
                            Sekali join member BGDC, selamanya menjadi member BGDC!!!
                        </p>
                    </div>
                    {/* <div className="container:md mx-auto m-4">
                        <div className="max-w-sm md:max-w-md text-center mx-auto items-center grid grid-cols-2  gap-4">
                            <a
                                type="button"
                                className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Untuk Non-Binusian
                            </a>

                            <a
                                type="button"
                                className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Untuk Binusian
                            </a>
                        </div>
                    </div> */}
                    <section className="alt_background border-b pb-8">
                        <div className="container max-w-5xl mx-auto m-8">
                            <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                                <div className="w-full sm:w-1/2 p-6 mt-6">
                                    <div className="align-middle">
                                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                            Komunitas Gaul
                                        </h3>
                                        <p className="text-gray-600 mb-8">
                                            BGDC memakai Discord sebagai tempat untuk para game
                                            developer untuk bertemu dan ngobrol tentang hobi mereka.
                                        </p>
                                        <p className="text-gray-600 mb-8">
                                            Server discord memiliki berbagai macam sub komunitas
                                            yang mencakupi berbagai interest.
                                        </p>
                                        <div className="flex space-x-2 justify-center md:justify-start">
                                            <div>
                                                <a
                                                    type="button"
                                                    className="inline-block px-4 py-4 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                                    href="https://binusgdc.com/discord"
                                                >
                                                    Join Discord Server BGDC!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-6 mt-6">
                                    <Image
                                        src="/images/join1.png"
                                        alt="BGDC Discord Community"
                                        width={464}
                                        height={270}
                                    />
                                </div>
                            </div>

                            <div className="m-8 flex flex-wrap flex-col sm:flex-row-reverse">
                                <div className="w-full sm:w-1/2 p-6 ">
                                    <Image
                                        src="/images/join2.png"
                                        alt="Discord Online Classes"
                                        width={432}
                                        height={387}
                                    />
                                </div>
                                <div className="w-full sm:w-1/2 p-6 mt-6 ">
                                    <div className="align-middle">
                                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                            Kelas Online + Rekaman
                                        </h3>
                                        <p className="text-gray-600 mb-8">
                                            Untuk member yang juga ingin belajar game development,
                                            BGDC juga menyediakan berbagai kelas game development.
                                            Kelas ini mencakupi banyak hal mulai dari programming,
                                            design, art, sampai sound.
                                        </p>
                                        <div className="flex space-x-2 justify-center md:justify-start">
                                            <div>
                                                <a
                                                    type="button"
                                                    className="inline-block px-4 py-4 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                                    href="https://binusgdc.com/kurikulum2022"
                                                >
                                                    Lihat Kurikulum BGDC!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-8 flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                                <div className="w-full sm:w-1/2 p-6 ">
                                    <div className="align-middle">
                                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                            Pengalaman Berorganisasi
                                        </h3>
                                        <p className="text-gray-600 mb-8">
                                            Member BGDC bisa apply menjadi aktivis dimana mereka
                                            bisa belajar cara mengurus sebuah organisasi. Aktivis
                                            akan mendapatkan banyak pengalaman terutama terkait soft
                                            skills dan hard skills.
                                        </p>
                                        <div className="flex space-x-2 justify-center md:justify-start">
                                            <div>
                                                <a
                                                    type="button"
                                                    className="inline-block px-4 py-4 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm  leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                    Baca Lebih Lanjut
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-6 mt-6">
                                    <Image
                                        src="/images/join3.png"
                                        alt="Team To-do List"
                                        width={432}
                                        height={338.5}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:inline-block md:box-border max-w-7xl mx-4  lg:columns-3 xl:columns-3">
                            {testimonialsStatic.map((el, i) => (
                                <Testimonial key={i} {...el}></Testimonial>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </MainLayout>
    )
}
