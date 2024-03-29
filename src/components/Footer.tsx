import Image from "next/image"
import { FaItchIo } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer className="   bg-neutral-700 p-16">
                <div className=" lg:flex  justify-center ">
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <Image
                                    src="/binus2.png"
                                    width={220}
                                    height={50}
                                    className="mt-1 mr-4 w-15 h-12"
                                    alt="binus game development club logo"
                                />
                            </div>

                            <div className="ml-14 ">
                                <div className="text-white text-xs min-w-max">
                                    <div className="mb-1">
                                        <span>Jl. K. H. Syahdan No. 9, Kemanggisan,</span>
                                    </div>
                                    <div className="mb-1">
                                        <span>Palmerah Jakarta 11480</span>
                                    </div>
                                    <div className="mb-1">
                                        <span>Indonesia</span>
                                    </div>
                                    <i className="fa-brands fa-itch-io"></i>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <span className="static lg:text-center text-xs text-white">
                                Copyright © 2023. Binus Game Development Club . All Rights Reserved.
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="hidden justify-end lg:flex">
                            <Image
                                width={130}
                                height={80}
                                src="/binus1.png"
                                className="h-16 "
                                alt="binus university logo"
                            />
                        </div>

                        <div className="lg:hidden">
                            <a>
                                <img
                                    src="/playobservedevelop.png"
                                    className="h-36 "
                                    alt="Slogan: Play, Observe, Develop"
                                />
                            </a>
                        </div>

                        <div className="flex space-x-1 lg:mt-12 sm:space-x-4 lg:space-x-4 mt-6">
                            <a
                                href="https://instagram.com/binusgdc"
                                className="text-white hover:text-gray-900 "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <svg
                                    className="w-6 h-6 lg:w-5 lg:h-5 "
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Instagram page</span>
                            </a>

                            <a
                                href="https://bgdc.itch.io/"
                                className="text-white hover:text-gray-900 "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaItchIo className="w-5 h-5" />
                                <span className="sr-only">Itch</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/company/binus-game-development-club/"
                                className="text-white hover:text-gray-900 "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <svg
                                    className="w-6 h-6 lg:w-5 lg:h-5"
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

                            <a
                                href="https://www.youtube.com/channel/UCdDgF6FOjsIfKinPaorLF4Q"
                                className="text-white hover:text-gray-900 "
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <svg
                                    className="w-6 h-6 lg:w-5 lg:h-5 "
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

                            <a
                                href="https://twitter.com/Binusgdc"
                                className="text-white hover:text-gray-900"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <svg
                                    className="w-6 h-6 lg:w-5 lg:h-5 "
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>

                            <a
                                href="https://www.facebook.com/BinusGDC/"
                                className="text-white hover:text-gray-900"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <svg
                                    className="w-6 h-6 lg:w-5 lg:h-5 "
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

                        <div className="lg:hidden mt-10 ">
                            <div className="text-white text-lg">
                                <div className="">
                                    <span>Jl. K. H. Syahdan No. 9, Kemanggisan,</span>
                                </div>
                                <div className="">
                                    <span>Palmerah Jakarta 11480</span>
                                </div>
                                <div className="">
                                    <span>Indonesia</span>
                                </div>
                                <i className="fa-brands fa-itch-io"></i>
                            </div>

                            <div className="mt-12 text-amber-300 text-lg  mb-2">
                                <p>BGDC</p>
                            </div>

                            <div className="grid grid-cols-2  ">
                                <ul className="text-white text-lg ">
                                    <li className="mb-2">
                                        <a href={"/about-us"} className="hover:underline">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href={"/contact-us"} className="hover:underline">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://student-activity.binus.ac.id/bgdc/"
                                            className="hover:underline"
                                        >
                                            BINUS Page
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 border-rounded border border-amber-400 border-t-2 border-l-0 border-r-0 border-b-0  "></div>
                        </div>

                        <div className="flex lg:hidden justify-between h-60 sm:h-32 items-center mt-5 mb-5 lg:mt-0 lg:mb-0 sm:flex-row flex-col">
                            <div className="lg:hidden w-full sm:w-auto h-full flex items-center justify-center p-1">
                                <Image
                                    width={130}
                                    height={80}
                                    src="/binus1.png"
                                    className="h-20 "
                                    alt="binus university logo"
                                />
                            </div>

                            <div className="lg:hidden w-full sm:w-auto h-full flex items-center justify-center p-1">
                                <Image
                                    src="/binus2.png"
                                    width={220}
                                    height={50}
                                    className="h-12 max-w-min mt-12 sm:mt-2"
                                    alt="binus game development club logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
