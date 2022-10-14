import Image from "next/image"
const VisiMisi = () => {
    return (
        <>
            <div className="pt-24">
                <div className="container max-w-5xl mx-auto mt-16">
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Siapa BGDC?
                                </h3>
                                <h5 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                                    Binus Game Development Club
                                </h5>
                                <p className="text-gray-600 my-8">
                                    Tempat berkumpulnya para binusian untuk bermain, mengamati, dan
                                    mengembangkan game. Kami menawarkan berbagai kursus game
                                    development serta tempat untuk bertemu dengan peminat antusias
                                    lainnya.
                                </p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <img src="/images/cheer.png" alt="bgdjam test" />
                        </div>
                    </div>
                </div>
                <div className="container max-w-2xl mx-auto mt-16">
                    <div className="text-center m-4 ">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Visi</h3>
                        <h5 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                            Tujuan BGDC
                        </h5>
                        <p className="text-gray-600 my-8">
                            Menjadi organisasi yang menghasilkan game developer berkualitas dengan
                            menyediakan pengajaran, bimbingan, dan sarana publikasi game sembari
                            menjunjung kekeluargaan dalam komunitas pada tahun 2025.
                        </p>
                    </div>
                </div>
                <div className="container max-w-5xl mx-auto mt-16">
                    <div className="text-center m-4 ">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Misi</h3>
                        <h5 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                            Play, Observe, Develop!
                        </h5>
                    </div>
                    <div className="px-8 lg:px-auto m-4 md:grid  gap-8 grid-cols-3 ">
                        <div className="text-center pt-8 ">
                            <div className="w-full  bg-white grid place-items-center">
                                <Image
                                    width={200}
                                    height={150}
                                    src="/images/playing.png"
                                    alt="bgdjam test"
                                />
                            </div>
                            <p className="text-gray-600 mt-8">
                                Menyediakan konten edukatif mengenai game development yang berasal
                                dari pihak luar maupun dalam.
                            </p>
                        </div>

                        <div className="text-center pt-8 ">
                            <div className="w-full  bg-white grid place-items-center">
                                <Image
                                    width={200}
                                    height={150}
                                    src="/images/achieve.png"
                                    alt="bgdjam test"
                                />
                            </div>
                            <p className="text-gray-600 mt-8">
                                Mengadakan kegiatan yang dapat menjadi sarana bagi anggota untuk
                                mempublikasikan game buatan mereka.
                            </p>
                        </div>

                        <div className="text-center p-8 ">
                            <div className="w-full  bg-white grid place-items-center">
                                <Image
                                    width={200}
                                    height={150}
                                    src="/images/together.png"
                                    alt="bgdjam test"
                                />
                            </div>
                            <p className="text-gray-600 mt-8">
                                Mengadakan kegiatan yang dapat mempererat hubungan antaranggota.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisiMisi
