import Image from "next/image"
import CSS from "csstype"

export default function GameKami() {
    const gamekami: CSS.Properties = {
        display: '"flex"',
        backgroundColor: "#F9F9F9",
        height: "2000px",
        overflow: "hidden",
    }

    return (
        <div className="relative" style={gamekami}>
            <div className="pt-10">
                <div className="flex items-center justify-center text-4xl font-bold">Game Kami</div>
                <div className="flex items-center justify-center mt-5">
                    Game yang kami buat untuk game jam serta game dari hasil Talent
                </div>
                <div className="flex items-center justify-center">Group BGDC</div>
            </div>

            <div className="relative">
                <div className="flex justify-center mr-96 pr-60 mt-20">
                    <Image
                        src={"/images/logo1.png"}
                        alt="photo"
                        width={112}
                        height={112}
                        className="z-10"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-96 -translate-y-1/2 mt-48 overflow-hidden text-sm bg-white rounded-xl ">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">CHAOS WEEKLY</p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">
                        Play as a magazine ediot, trying to get money by making covers and
                        headlines. Make the world chaotic with the power of hoax for raking in the
                        cash, but going overboard will get you in trouble!
                    </p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">Game dibuat untuk:</p>
                    <p className="overflow-hidden pl-8 font-bold text-yellow-400">
                        Brackeys Game Jam 2020.2
                    </p>
                    <div className="flex px-8 pb-8 items-center">
                        <button className="bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 font-bold py-2 px-4 rounded-full">
                            Lihat di Itch.io
                        </button>
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

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[223px] ml-12 z-10">
                <Image
                    src={"/images/report.png"}
                    alt="photo"
                    width={278}
                    height={170}
                    className=""
                />
            </div>
            <div className="flex justify-center ml-80 pl-20 mt-2">
                <Image src={"/images/pic2.png"} alt="photo" width={404} height={241} className="" />
            </div>

            <div className="absolute  top-[280px] ml-[1460px] z-10">
                <Image src={"/images/hex1.png"} alt="photo" width={408} height={408} className="" />
            </div>

            <div className="absolute  top-[820px] ml-[20px] z-10">
                <Image src={"/images/hex2.png"} alt="photo" width={320} height={320} className="" />
            </div>

            <div className="absolute  top-[1590px] ml-[1520px] z-10">
                <Image src={"/images/hex1.png"} alt="photo" width={366} height={366} className="" />
            </div>

            <div className="pt-20 relative">
                <div className="absolute left-1/2 mt-24 ml-4">
                    <Image
                        src={"/images/logo2.png"}
                        alt="photo"
                        width={112}
                        height={112}
                        className="z-10"
                    />
                </div>

                <div className="absolute left-1/2 ml-18 mt-[150px] overflow-hidden text-sm bg-white rounded-xl">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">
                        The Cursed Wheep
                    </p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">
                        Help the Wolf and the Sheep break the curse in the mysterious forest, in
                        this simple yet amusing platformer developed by BGDC.
                    </p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">Game dibuat untuk:</p>
                    <p className="overflow-hidden pl-8 font-bold text-amber-400">
                        GMTK Game Jam 2021
                    </p>
                    <button className="bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold py-2 px-4 rounded-full mt-[20px]">
                        Lihat di Itch.io
                    </button>

                    <div className="absolute top-1/2 ml-[230px] mt-[40px]">
                        <Image
                            src={"/images/unity.png"}
                            alt="photo"
                            width={146}
                            height={98}
                            className=""
                        />
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[320px] ml-[45px]">
                    <Image
                        src={"/images/pic3.png"}
                        alt="photo"
                        width={404}
                        height={241}
                        className=""
                    />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[460px] ml-[210px] z-10">
                    <Image
                        src={"/images/wheep.png"}
                        alt="photo"
                        width={278}
                        height={170}
                        className=""
                    />
                </div>
            </div>

            <div className="relative">
                <div className="absolute mt-[570px] ml-[700px]">
                    <Image
                        src={"/images/logo3.png"}
                        alt="photo"
                        width={112}
                        height={112}
                        className="z-10"
                    />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[810px] ml-[220px] overflow-hidden text-sm bg-white rounded-xl">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">Hell Dodge</p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">
                        Hell Dodge is an event organized by Satan and sponsored by God Himself!
                        Participants will need to endure the rains of arrows and cannonballs for as
                        long as they can. Whoever last the longest would win and be bestowed upon a
                        reward that their heart desires.
                    </p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">Game dibuat untuk:</p>
                    <p className="overflow-hidden pl-8 font-bold text-yellow-400">
                        Talent Group BGDC Batch 2
                    </p>
                    <button className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mt-[20px]  font-bold py-2 px-4 rounded-full">
                        Lihat di Itch.io
                    </button>
                    <div className="ml-[240px]">
                        <Image
                            src={"/images/unity.png"}
                            alt="photo"
                            width={146}
                            height={98}
                            className=""
                        />
                    </div>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 mt-[760px] ml-[440px] z-10">
                    <Image
                        src={"/images/charselect.png"}
                        alt="photo"
                        width={278}
                        height={170}
                        className=""
                    />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[860px] ml-[590px]">
                    <Image
                        src={"/images/pic4.png"}
                        alt="photo"
                        width={404}
                        height={241}
                        className=""
                    />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 mt-[1030px]">
                    <button className="bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mt-10  font-bold pl-6 pr-6 py-4 px-4 rounded-full">
                        Lihat Game Kami →
                    </button>
                </div>
            </div>
        </div>
    )
}
