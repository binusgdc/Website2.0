const Aktivitas = () => {
    return (
        <>
            <div className="container max-w-2xl mx-auto mt-16">
                <div className="text-center m-4 ">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        Aktivitas
                    </h3>
                    <h5 className=" text-xl text-gray-800 font-semibold leading-none mb-3">
                        Kegiatan yang dilakukan oleh BGDC
                    </h5>
                </div>

                <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">
                            <h3 className="text-center md:text-left text-3xl text-gray-800 font-bold leading-none mb-3">
                                Kelas Game Dev
                            </h3>
                            <p className="text-center md:text-left text-gray-600 mb-8">
                                Mengadakan kegiatan yang dapat menjadi sarana bagi anggota untuk
                                mempublikasikan game buatan mereka.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src="/images/gameclass.png" alt="bgdjam test" />
                    </div>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row-reverse">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src="/images/talentgroup.png" alt="bgdjam test" />
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6 ">
                        <div className="align-middle">
                            <h3 className="text-center md:text-left text-3xl text-gray-800 font-bold leading-none mb-3">
                                Talent Group
                            </h3>
                            <p className="text-center md:text-left text-gray-600 mb-8">
                                Talent Group adalah program BGDC dengan tujuan untuk mengelompokkan
                                member-member BGDC yang benar-benar berkomitmen untuk membuat game.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                    <div className="w-full sm:w-1/2 p-6 mt-6 ">
                        <div className="align-middle">
                            <h3 className="text-center md:text-left text-3xl text-gray-800 font-bold leading-none mb-3">
                                Gathering
                            </h3>
                            <p className="text-center md:text-left text-gray-600 mb-8">
                                Gathering adalah kegiatan dimana kita mengumpulkan para member BGDC
                                dan mengajak mereka semua untuk bersosialisasi satu sama lain.
                                Biasanya, pada saat kita gathering, kita akan main bareng, ngobrol
                                bareng, makan bareng, dan saling sharing tentang diri masing-masing.
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src="/images/gathering.png" alt="bgdjam test" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aktivitas
