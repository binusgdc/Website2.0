import SearchBar from "../components/SearchBar"
import MainLayout from "../layouts/MainLayouts"
import Image from "next/image"

function Blog() {
    return (
        <MainLayout title="Blog">
            <div className="pt-24">
                <div className="container max-w-7xl mx-auto mt-4">
                    <div className=" px-8 lg:px-auto text-left m-4">
                        <h1 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">
                            BGDC Blog
                        </h1>
                        <p className="text-sm md:text-base font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                            ullamcorper tellus. Aenean a mi id odio pulvinar eleifend placerat sit
                            amet magna.
                        </p>
                        <SearchBar placeholder="Search Posts...." onSearch={(_) => {}}></SearchBar>
                        <div className="flex flex-col items-center py-4">
                            <div className="flex items-center space-x-1">
                                <a
                                    href=""
                                    className="py-4 px-2 primary_yellow border-b-4 border-primary_yellow font-semibold "
                                >
                                    Home
                                </a>
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-primary_yellow transition duration-300"
                                >
                                    Services
                                </a>
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-primary_yellow transition duration-300"
                                >
                                    About
                                </a>
                                <a
                                    href=""
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-primary_yellow transition duration-300"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="px-auto m-4 grid grid-cols-1 gap-2 md:gap-8 sm:grid-cols-3 ">
                            <div className="relative flex flex-col md:space-x-5 space-y-2 md:space-y-0 rounded-xl p-2 max-w-xs md:max-w-3xl mx-auto border border-white bg-white my-2 ">
                                <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                                    <Image
                                        className="rounded-xl object-cover"
                                        src="/images/bgdjam.png"
                                        alt="blog 1"
                                        width={390}
                                        height={200}
                                    />
                                </div>
                                <div className="max-w-xs max-h-xs bg-white flex flex-col space-y-2 py-3">
                                    <div className="flex justify-between item-left">
                                        <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium block">
                                            Gamejam
                                        </div>
                                    </div>
                                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                        BGDJam 2021
                                    </h3>
                                    <p className="md:text-lg text-gray-500 text-base">
                                        19 Aug 2021
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:space-x-5 space-y-2 md:space-y-0 rounded-xl p-2 max-w-xs md:max-w-3xl mx-auto border border-white bg-white my-2 ">
                                <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                                    <Image
                                        className="rounded-xl object-cover"
                                        src="/images/join2.png"
                                        alt="blog 2"
                                        width={390}
                                        height={200}
                                    />
                                </div>
                                <div className="w-full bg-white flex flex-col space-y-2 py-3">
                                    <div className="flex justify-between item-left">
                                        <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium block">
                                            Gamejam
                                        </div>
                                    </div>
                                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                        BGDJam 2021
                                    </h3>
                                    <p className="md:text-lg text-gray-500 text-base">
                                        19 Aug 2021
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:space-x-5 space-y-2 md:space-y-0 rounded-xl p-2 max-w-xs md:max-w-3xl mx-auto border border-white bg-white my-2 ">
                                <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                                    <Image
                                        className="rounded-xl object-cover "
                                        src="/images/black.webp"
                                        alt="blog 3"
                                        width={390}
                                        height={200}
                                    />
                                </div>
                                <div className="w-full bg-white flex flex-col space-y-2 py-3">
                                    <div className="flex justify-between item-left">
                                        <div className="bg-light_yellow text-txt_yellow px-3 py-1 rounded-full text-xs font-medium block">
                                            Gamejam
                                        </div>
                                    </div>
                                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                        BGDJam 2021
                                    </h3>
                                    <p className="md:text-lg text-gray-500 text-base">
                                        19 Aug 2021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Blog
