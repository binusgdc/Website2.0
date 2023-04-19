import MainLayout from "../layouts/MainLayouts"
import Image from "next/image"

function About() {
    return (
        <MainLayout title="About Us | BGDC">
            <div className="pt-12">
                <div className="container max-w-5xl mx-auto mt-8">
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle md:text-left text-center">
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
            <div className="container max-w-5xl mx-auto mt-8" id="BGDC_Join">
                <div className=" px-8 lg:px-auto text-center m-4">
                    <h3 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                        Pengurus
                    </h3>
                    <h3 className="text-sm md:text-base font-bold">Orang-Orang Dibalik BGDC</h3>
                </div>
                <div className="px-8 lg:px-auto m-4 grid grid-cols-1 gap-8 sm:grid-cols-3 ">
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Audrey Levina 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Audrey Levina
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">Ketua Umum BGDC</p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Nathanael Matthew Makmur 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Nathanael Matthew Makmur
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Ketua Regional Kemanggisan
                        </p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Vetri Marvel Budiman 2 edited.png"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Vetri Marvel Budiman
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Ketua Regional Alam Sutera
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Robertus Eric 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Robertus Eric
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">Sekretaris Umum</p>
                    </div>

                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Dheanandri.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Dheanandri
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">Bendahara Umum</p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Justin Christian.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Justin Christian
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">Database Manager</p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Daniel Alexander 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Daniel Alexander
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Koordinator Community Development Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Rionaldi Marhanson Wijaya 3.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Rionaldi Marhanson Wijaya
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Community Development Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Ariel Vito Suyata Ong.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Ariel Vito Suyata Ong
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Community Development Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Richard Prayogi 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Richard Prayogi
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Koordinator Education Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Gaung Ramadhan Bagaswara 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Gaung Ramadhan Bagaswara
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Education Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Winson Allan Wijaya.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Winson Allan Wijaya
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Education Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Hubertus Darrel Santoso 2.jpeg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Hubertus Darrel Santoso
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Koordinator Public Relations Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Vito Sebastian Sanjaya 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Vito Sebastian Sanjaya
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Public Relations Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Ferry Edited.png"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">Ferry</h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Sub-Koordinator Public Relations Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Stanly Bianconeri 2.jpg"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Stanly Bianconeri
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">
                            Koordinator Media and Creative Division
                        </p>
                    </div>
                    <div className="text-center pt-8 ">
                        <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                            <Image
                                className="rounded-xl object-cover"
                                src="/images/pengurus_img/Steven Yoshell Yapriadi 2.png"
                                alt="blog 1"
                                width={175}
                                height={225}
                            />
                        </div>
                        <h1 className="my-4 font-bold break-normal text-lg md:text-lg">
                            Steven Yoshell Yapriadi
                        </h1>
                        <p className="text-sm md:text-sm font-semibold">HR Manager</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default About
