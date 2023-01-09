import Image from "next/image"
import AgateImg from "/public/images/agate.png"
import H2LImg from "/public/images/h2l.png"
const Acara = () => {
    return (
        <>
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
                    <div className="flex space-x-2 justify-center m-8 ">
                        <div>
                            <button
                                type="button"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Baca Berita Acara →
                            </button>
                        </div>
                    </div>

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
                        <Image width={200} height={200} src={AgateImg} />
                        <Image src={H2LImg} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Acara
