import Image from "next/image"
import CSS from "csstype"

declare module "*.ttf"

interface listData {
    gamedata: {
        title1: string
        title2: string
        title3: string
        desc1: string
        desc2: string
        desc3: string
        made: string
        report: string
        wheep: string
        charselect: string
        pic2: string
        pic3: string
        pic4: string
        event1: string
        event2: string
        event3: string
        unity: string
        logo1: string
        logo2: string
        logo3: string
        hex1: string
        hex2: string
    }
}

export default function GameKami({ gamedata }: listData) {
    const {
        title1,
        title2,
        title3,
        desc1,
        desc2,
        desc3,
        unity,
        made,
        report,
        wheep,
        charselect,
        pic2,
        pic3,
        pic4,
        event1,
        event2,
        event3,
        logo1,
        logo2,
        logo3,
        hex1,
        hex2,
    } = gamedata

    const gamekami: CSS.Properties = {
        display: '"flex"',
        backgroundColor: "#F9F9F9",
        height: "2000px",
        overflow: "hidden",
        // flex-direction: '"column"'
        // align-items: 'center',
        // padding: '60px',
        // gap: '60px',

        // width: '100vw',

        // background: '#F9F9F9'
    }

    return (
        <div className="relative" style={gamekami}>
            <div className="pt-10">
                <div className="flex items-center justify-center text-4xl font-bold">Game Kami</div>
                <div className="flex items-center justify-center mt-5">
                    Game yang kami buat untuk game jam serta game dari hasil Talent{" "}
                </div>
                <div className="flex items-center justify-center">Group BGDC</div>
            </div>

            <div className="relative">
                <div className="flex justify-center mr-96 pr-60 mt-20">
                    <Image src={logo1} alt="photo" width={112} height={112} className="z-10" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-96 -translate-y-1/2 mt-48 overflow-hidden text-sm bg-white rounded-xl ">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">{title1}</p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">{desc1}</p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">{made}</p>
                    <p className="overflow-hidden pl-8 font-bold text-yellow-400">{event1}</p>
                    <div className="flex px-8 pb-8 items-center">
                        <button className="bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 font-bold py-2 px-4 rounded-full">
                            Lihat di Itch.io
                        </button>
                        <Image src={unity} alt="photo" width={146} height={98} className="" />
                    </div>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-[223px] ml-12 z-10">
                <Image src={report} alt="photo" width={278} height={170} className="" />
            </div>
            <div className="flex justify-center ml-80 pl-20 mt-2">
                <Image src={pic2} alt="photo" width={404} height={241} className="" />
            </div>

            <div className="absolute  top-[280px] ml-[1460px] z-10">
                <Image src={hex1} alt="photo" width={408} height={408} className="" />
            </div>

            <div className="absolute  top-[820px] ml-[20px] z-10">
                <Image src={hex2} alt="photo" width={320} height={320} className="" />
            </div>

            <div className="absolute  top-[1590px] ml-[1520px] z-10">
                <Image src={hex1} alt="photo" width={366} height={366} className="" />
            </div>

            <div className="pt-20 relative">
                <div className="absolute left-1/2 mt-24 ml-4">
                    <Image src={logo2} alt="photo" width={112} height={112} className="z-10" />
                </div>

                <div className="absolute left-1/2 ml-18 mt-[150px] overflow-hidden text-sm bg-white rounded-xl">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">{title2}</p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">{desc2}</p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">{made}</p>
                    <p className="overflow-hidden pl-8 font-bold text-amber-400">{event2}</p>
                    <button className="bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mb-10 font-bold py-2 px-4 rounded-full mt-[20px]">
                        Lihat di Itch.io
                    </button>

                    <div className="absolute top-1/2 ml-[230px] mt-[40px]">
                        <Image src={unity} alt="photo" width={146} height={98} className="" />
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[320px] ml-[45px]">
                    <Image src={pic3} alt="photo" width={404} height={241} className="" />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[460px] ml-[210px] z-10">
                    <Image src={wheep} alt="photo" width={278} height={170} className="" />
                </div>
            </div>

            <div className="relative">
                <div className="absolute mt-[570px] ml-[700px]">
                    <Image src={logo3} alt="photo" width={112} height={112} className="z-10" />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[810px] ml-[220px] overflow-hidden text-sm bg-white rounded-xl">
                    <p className="overflow-hidden pl-8 pt-16 text-3xl font-bold">{title3}</p>
                    <p className="overflow-hidden pl-8 pt-5 w-96">{desc3}</p>
                    <p className="overflow-hidden pl-8 pt-4 font-bold">{made}</p>
                    <p className="overflow-hidden pl-8 font-bold text-yellow-400">{event3}</p>
                    <button className="absolute bg-gradient-to-b from-yellow-500 to-yellow-400 text-white mr-24 ml-8 mt-[20px]  font-bold py-2 px-4 rounded-full">
                        Lihat di Itch.io
                    </button>
                    <div className="ml-[240px]">
                        <Image src={unity} alt="photo" width={146} height={98} className="" />
                    </div>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 mt-[760px] ml-[440px] z-10">
                    <Image src={charselect} alt="photo" width={278} height={170} className="" />
                </div>

                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 mt-[860px] ml-[590px]">
                    <Image src={pic4} alt="photo" width={404} height={241} className="" />
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
