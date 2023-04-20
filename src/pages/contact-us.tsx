import MainLayout from "../layouts/MainLayouts"

function Contact() {
    return (
        <MainLayout title="Contact Us | BGDC">
            <main className=" flex  content-center bg-neutral-700">
                <div className=" pt-28 pb-32 ">
                    <h1 className="m-auto font-bold text-white p-10 w-max lg:text-5xl text-3xl ">
                        Get in Touch
                    </h1>
                    <div className="pt-10 flex justify-center lg:flex-row flex-col  items-center lg:items-start align-top">
                        <div className="mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-center flex-col items-center text-center">
                            <img src="/discord.png" className="h-14 max-w-min" alt="" />
                            <h1 className="mt-1 text-white font-bold">Community </h1>
                            <p className="mt-2 text-white text-xs font-light">
                                Tempat dimana para game developer bertemu dan berbincang tentang
                                hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                mencakupi berbagai interest.
                            </p>
                        </div>
                        <div className="lg:mt-0 mt-20 mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-center flex-col items-center text-center">
                            <img src="/line.png" className="h-14 max-w-min" alt="" />
                            <h1 className="mt-1 text-white font-bold">Line </h1>
                            <p className="mt-2 text-white text-xs font-light">
                                Tempat dimana para game developer bertemu dan berbincang tentang
                                hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                mencakupi berbagai interest.
                            </p>
                        </div>
                        <div className="lg:mt-0 mt-20 mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-top flex-col items-center text-center">
                            <img src="/email.png" className="h-14 max-w-min" alt="" />
                            <h1 className="mt-1 text-white font-bold">Email </h1>
                            <p className="mt-2 text-white text-xs text-center font-light">
                                Bagi yang ingin berkolaborasi dan urusan penting lainnya bisa
                                langsung menghubungi email kami di bgdc@binus.ac.id
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <div className=" pt-4 pb-20">
                <h1 className="m-auto font-bold text-neutral-700 p-10 w-max lg:text-4xl text-xl">
                    Alamat BGDC
                </h1>

                <div className="flex lg:flex-row flex-col  justify-center mt-16 sm:items-center  ">
                    <div className=" lg:w-auto ">
                        <div className="place-content-center">
                            <div className="flex sm:ml-0 ml-8">
                                <a>
                                    <img
                                        src="/phone.png"
                                        className=" lg:w-7 lg:h-7 w-5 h-5 max-w-min"
                                        alt=""
                                    />
                                </a>
                                <h1 className="lg:text-lg text-md font-bold text-neutral-700 ml-3">
                                    Telephone Number
                                </h1>
                            </div>

                            <h1 className="ml-11  mt-4 lg:text-sm text-xs">021 – 2977 9100</h1>

                            <div className="flex mt-14 sm:ml-0 ml-8">
                                <img
                                    src="/maps.png"
                                    className=" lg:w-7 lg:h-7 w-5 h-5 max-w-min"
                                    alt=""
                                />
                                <h1 className="lg:text-lg text-md font-bold text-neutral-700 ml-3">
                                    Address
                                </h1>
                            </div>

                            <h1 className="ml-10  mt-4 lg:text-sm text-xs w-4/5">
                                Jl. K. H. Syahdan No.9, Kemanggisan, Palmerah Jakarta 11480
                                Indonesia{" "}
                            </h1>
                        </div>

                        <div className="flex mt-14 ml-10 flex-col lg:mb-0 mb-20">
                            <h1 className="text-lg font-bold text-neutral-700 ">Other Socials</h1>

                            <div className="flex mt-3  lg:space-x-4 space-x-2">
                                <a href="#" className="text-gray-900 ">
                                    <svg
                                        className="w-5 h-5 "
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Itch</span>
                                </a>

                                <a href="#" className="text-gray-900 ">
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">LinkedIn Page</span>
                                </a>

                                <a href="#" className="text-gray-900 ">
                                    <svg
                                        className="w-5 h-5 "
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">YouTube Page</span>
                                </a>

                                <a href="#" className="text-gray-900">
                                    <svg
                                        className="w-5 h-5 "
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>

                                <a href="#" className="text-gray-900">
                                    <svg
                                        className="w-5 h-5 "
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a>
                            <iframe
                                style={{ width: "100%", height: "320px" }}
                                className="gmap_iframe border rounded-3xl "
                                frameBorder="0"
                                scrolling="yes"
                                src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Binus Syahdan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" pt-4 pb-10">
                <h1 className="mb-10 m-auto font-bold text-neutral-700 p-10 w-max lg:text-4xl text-xl">
                    Connect with us
                </h1>
                <div className="flex content-center justify-center ">
                    <form action="#" className="space-y-4 lg:w-2/5 w-2/3 ">
                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="subject"
                                className="block mb-2 font-bold text-neutral-700 "
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-2 w-full  text-neutral-700 bg-gray-100 rounded-lg "
                            />
                        </div>

                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="email"
                                className="block mb-2 font-bold text-neutral-700 mt-8 "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className=" bg-gray-100  text-neutral-700  rounded-lg block w-full p-2 "
                            />
                        </div>
                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="subject"
                                className="block mb-2  font-bold text-neutral-700 mt-8 "
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="bg-gray-100  text-neutral-700  rounded-lg block w-full p-2  "
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 font-bold text-neutral-700 mt-8 "
                            >
                                Description
                            </label>
                            <textarea
                                id="message"
                                className="bg-gray-100  text-neutral-700  rounded-lg block w-full p-2 bg-gray-100  text-neutral-700  rounded-lg block w-full p-2  "
                            ></textarea>
                        </div>
                        <div className=" flex justify-center ">
                            <button className="flex justify-center bg-gradient-to-b from-amber-500 via-yellow-400 to-yellow-300 text-white text-sm font-medium py-1.5 px-4 rounded-2xl mt-10 mt-8 ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default Contact
