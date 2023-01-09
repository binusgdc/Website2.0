import Image from "next/image"
const Kegiatan = () => {
    return (
        <>
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
        </>
    )
}
export default Kegiatan
