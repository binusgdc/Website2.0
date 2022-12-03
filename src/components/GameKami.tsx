import Image from "next/image"
const GameBGDC = () => {
    return (
        <>
            <div className="container max-w-5xl mx-auto mt-8" id="">
                <div className=" px-8 lg:px-auto text-center m-4">
                    <h1 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                        Game Kami
                    </h1>
                    <p className="text-sm md:text-base font-bold">
                        Game yang telah kami buat untuk Game Jam serta game dari hasil Talent Group
                        BGDC.
                    </p>
                </div>
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white m-12 mb-12 md:mb-4">
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div>
                            <Image
                                src="/images/bgdjam.png"
                                alt="bgdjam test"
                                className="rounded-xl object-cover"
                                width={75}
                                height={75}
                            />
                        </div>
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                            CHAOS WEEKLY
                        </h3>
                        <p className="md:text-lg text-gray-500 text-base">
                            Play as a magazine editor, trying to get money by making covers and
                            headlines. Make the world chaotic with the power of hoax for raking in
                            the cash, but going overboard will get you in trouble!
                        </p>
                        <div className="flex justify-between item-center">
                            <div className="flex-col">
                                <div className="md:text-lg text-gray-500 text-base font-bold">
                                    Game dibuat untuk:
                                </div>
                                <div className="md:text-lg text-yellow-500 text-base font-bold">
                                    Brackeys Game Jam 2020.2
                                </div>
                                <div className="bg-amber-400 text-neutral-50 px-3 py-1 rounded-full text-xs font-medium hidden md:inline-block">
                                    Lihat di itch.io
                                </div>
                            </div>
                            <Image
                                src="/images/bgdjam.png"
                                alt="Made with Unity"
                                className="rounded-xl object-cover "
                                width={145}
                                height={97}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                        <Image
                            src="/images/bgdjam.png"
                            alt="bgdjam test"
                            className="rounded-xl object-cover "
                            width={200}
                            height={120}
                        />
                        <Image
                            src="/images/bgdjam.png"
                            alt="bgdjam test"
                            className="rounded-xl object-cover "
                            width={390}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameBGDC
