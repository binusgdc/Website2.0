import PengurusCard, { PengurusCardProps } from "../components/PengurusCard"
import MainLayout from "../layouts/MainLayouts"
import Image from "next/image"

const pengurusStatic: PengurusCardProps[] = [
    {
        fullName: "Ida Bagus Kuwera Girindra Putra",
        jabatanName: "Ketua Umum BGDC",
        portraitImagePath: "/images/pengurus_img/Kuwera.png",
    },
    {
        fullName: "Teuku Humam Zahran",
        jabatanName: "Ketua Regional Kemanggisan",
        portraitImagePath: "/images/pengurus_img/Humam.png",
    },
    {
        fullName: "Roger Gilbert Fernandi",
        jabatanName: "Ketua Regional Alam Sutera",
        portraitImagePath: "/images/pengurus_img/Roger.png",
    },
    {
        fullName: "Wilson Nathaniel",
        jabatanName: "Sekretaris Umum",
        portraitImagePath: "/images/pengurus_img/Wilson.png",
    },
    {
        fullName: "Mary Regina Ang",
        jabatanName: "Bendahara Umum",
        portraitImagePath: "/images/pengurus_img/Mary.png",
    },
    {
        fullName: "Alana Leandra",
        jabatanName: "Coordinator Community Development Division",
        portraitImagePath: "/images/pengurus_img/Alana.png",
    },
    {
        fullName: "Andrew Lawrence",
        jabatanName: "Sub-Coordinator Community Development Division",
        portraitImagePath: "/images/pengurus_img/Andrew.png",
    },
    {
        fullName: "Swasa Raditya",
        jabatanName: "Sub-Coordinator Community Development Division",
        portraitImagePath: "/images/pengurus_img/Swasa.png",
    },
    {
        fullName: "Derian Ardenichson",
        jabatanName: "Coordinator Education Division",
        portraitImagePath: "/images/pengurus_img/Derian.png",
    },
    {
        fullName: "Sean Matthew",
        jabatanName: "Sub-Coordinator Education Division",
        portraitImagePath: "/images/pengurus_img/Sean.png",
    },
    {
        fullName: "Angeline Cecilia",
        jabatanName: "Coordinator Public Relations Division",
        portraitImagePath: "/images/pengurus_img/Angel.png",
    },
    {
        fullName: "Lauretta Gail Rosalind Wijaya",
        jabatanName: "Sub-Coordinator Public Relations Division",
        portraitImagePath: "/images/pengurus_img/Lau.png",
    },
    {
        fullName: "Rezi Kharmeilya",
        jabatanName: "Sub-Coordinator Public Relations Division",
        portraitImagePath: "/images/pengurus_img/Rei.png",
    },
    {
        fullName: "Julia Marcelina",
        jabatanName: "Coordinator Media and Creative Division",
        portraitImagePath: "/images/pengurus_img/Julia.png",
    },
    {
        fullName: "Shafira Desriani Rosyad",
        jabatanName: "Sub-Coordinator Media and Creative Division",
        portraitImagePath: "/images/pengurus_img/Rara.png",
    },
]

function About() {
    return (
        <MainLayout title="About Us | BGDC">
            <div className="pt-12">
                <div className="container max-w-5xl mx-auto mt-8">
                    <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <div className="align-middle md:text-left text-center">
                                <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Siapa BGDC?
                                </h2>
                                <h3 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                                    Binus Game Development Club
                                </h3>
                                <p className="text-gray-600 my-8">
                                    Tempat berkumpulnya para binusian untuk bermain, mengamati, dan
                                    mengembangkan game. Kami menawarkan berbagai kursus game
                                    development serta tempat untuk bertemu dengan peminat antusias
                                    lainnya.
                                </p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 p-6 mt-6">
                            <Image
                                src="/images/cheer.png"
                                alt="bgdjam test"
                                width={450}
                                height={236}
                            />
                        </div>
                    </div>
                </div>
                <div className="container max-w-2xl mx-auto mt-16">
                    <div className="text-center m-4 ">
                        <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">Visi</h2>
                        <h3 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                            Tujuan BGDC
                        </h3>
                        <p className="text-gray-600 my-8">
                            Menjadi organisasi yang menghasilkan game developer berkualitas dengan
                            menyediakan pengajaran, bimbingan, dan sarana publikasi game sembari
                            menjunjung kekeluargaan dalam komunitas pada tahun 2025.
                        </p>
                    </div>
                </div>
                <div className="container max-w-5xl mx-auto mt-16">
                    <div className="text-center m-4 ">
                        <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">Misi</h2>
                        <h3 className="text-xl text-gray-800 font-semibold leading-none mb-3">
                            Play, Observe, Develop!
                        </h3>
                    </div>
                    <div className="px-8 lg:px-auto m-4 lg:grid gap-8 grid-cols-3 align-middle">
                        <div className="text-center pt-8 ">
                            <div className="w-full  bg-white grid place-items-center">
                                <Image
                                    width={200}
                                    height={150}
                                    src="/images/playing.png"
                                    alt="Person on a computer"
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
                                    alt="Achieving together"
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
                                    alt="Hands together"
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
                    <h2 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        Aktivitas
                    </h2>
                    <p className=" text-xl text-gray-800 font-semibold leading-none mb-3">
                        Kegiatan yang dilakukan oleh BGDC
                    </p>
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
                        <Image
                            src="/images/gameclass.png"
                            alt="Online game development class"
                            width={288}
                            height={174.3}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row-reverse">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <Image
                            src="/images/talentgroup.png"
                            alt="Kanban board"
                            width={288}
                            height={184.23}
                        />
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
                        <Image
                            src="/images/gathering.png"
                            alt="Group voice call"
                            width={288}
                            height={269.2}
                        />
                    </div>
                </div>
            </div>
            <div className="container max-w-5xl mx-auto mt-8" id="BGDC_Join">
                <div className=" px-8 lg:px-auto text-center m-4">
                    <h2 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                        Pengurus
                    </h2>
                    <p className="text-sm md:text-base font-bold">Orang-Orang Dibalik BGDC</p>
                </div>
                <div className="px-8 lg:px-auto m-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
                    {pengurusStatic.map((props, i) => (
                        <PengurusCard key={i} {...props}></PengurusCard>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default About
