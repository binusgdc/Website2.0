import Image from "next/image"
import CSS from "csstype"

export default function GameKami() {
    const gamekami: CSS.Properties = {
        display: '"flex"',
        backgroundColor: "#F9F9F9",
        height: "fit-content",
        minHeight: "1260px",
        // height: "2000px",
        overflow: "hidden",
    }

    return (
        <div className="relative" style={gamekami}>
            <div className="pt-10 flex justify-center lg:flex-row flex-col  items-center align-top">
                <div className="mr-8 ml-8 w-[350px] lg:w-[500px] flex justify-center flex-col items-center text-center">
                    <h1 className="text-[24pt] font-bold ">Game Kami</h1>
                    <p className="">
                        Game yang kami buat untuk game jam serta game dari hasil Talent Group BGDC
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
                        headlines. Make the world chaotic with the power of hoax for raking in the
                        cash, but going overboard will get you in trouble!
                    </p>
                    <p className="overflow-hidden pl-[113px] lg:pl-8 mt-[-70px] lg:mt-4 font-bold">
                        Game dibuat untuk:
                    </p>
                    <p className="overflow-hidden text-[10pt] lg:text-[11pt] pl-[113px] mb-[90px] lg:mb[0px] lg:pl-8 font-bold text-yellow-400">
                        Brackeys Game Jam 2020.2
                    </p>
                    <div className="flex px-8 pb-3 items-center">
                        <button className="w-[150px] hidden lg:block h-full flex-shrink-0 bg-gradient-to-b from-orange-400 to-yellow-400 text-white mt-[-100px] font-bold py-2 px-4 rounded-full">
                            Lihat di Itch.io
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
                    <button className="hidden lg:block bg-gradient-to-b from-orange-400 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold py-2 px-4 rounded-full mt-[20px]">
                        Lihat di Itch.io
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
                        Participants will need to endure the rains of arrows and cannonballs for as
                        long as they can. Whoever last the longest would win and be bestowed upon a
                        reward that their heart desires.
                    </p>
                    <p className="overflow-hidden pl-[117px] lg:pl-8 pt-[0px] lg:pt-4 mt-[-75px] lg:mt-[0px] font-bold">
                        Game dibuat untuk:
                    </p>
                    <p className="overflow-hidden pl-8 pb-[120px] lg:pb-[70px] ml-[85px] text-[9pt] lg:ml-[0px] font-bold text-yellow-400">
                        Talent Group BGDC Batch 2
                    </p>

                    <button className="hidden lg:block bg-gradient-to-b from-orange-400 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold py-2 px-4 rounded-full mt-[-45px]">
                        Lihat di Itch.io
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
                    <button className="flex-shrink-0 text-[10pt] lg:text-[12pt] w-[170px] lg:w-[200px] bg-gradient-to-b from-orange-400 to-yellow-400 text-white mr-24 ml-[100px] lg:ml-8 mt-[450px] lg:mt-10  font-bold pl-6 pr-6 py-4 px-4 rounded-3xl">
                        Lihat Game Kami →
                    </button>
                </div>
            </div>
        </div>
    )
}