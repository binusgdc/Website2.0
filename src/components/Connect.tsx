const Connect = () => {
    return (
        <>
            <div className=" pt-4 pb-10">
                <h1 className="mb-10 m-auto font-bold text-neutral-700 p-10 w-max lg:text-4xl text-xl">
                    Connect with us
                </h1>
                <div className="flex content-center justify-center ">
                    <form action="#" className="space-y-4 lg:w-2/5 w-2/3 ">
                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="subject"
                                className="block mb-2 font-bold text-neutral-700 "
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-2 w-full  text-neutral-700 bg-gray-100 rounded-lg "
                            />
                        </div>

                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="email"
                                className="block mb-2 font-bold text-neutral-700 mt-8 "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className=" bg-gray-100  text-neutral-700  rounded-lg block w-full p-2 "
                            />
                        </div>
                        <div className="lg:w-3/5 w-3/5 min-w-max">
                            <label
                                htmlFor="subject"
                                className="block mb-2  font-bold text-neutral-700 mt-8 "
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="bg-gray-100  text-neutral-700  rounded-lg block w-full p-2  "
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 font-bold text-neutral-700 mt-8 "
                            >
                                Description
                            </label>
                            <textarea
                                id="message"
                                className="bg-gray-100  text-neutral-700  rounded-lg block w-full p-2 bg-gray-100  text-neutral-700  rounded-lg block w-full p-2  "
                            ></textarea>
                        </div>
                        <div className=" flex justify-center ">
                            <button className="flex justify-center bg-gradient-to-b from-amber-500 via-yellow-400 to-yellow-300 text-white text-sm font-medium py-1.5 px-4 rounded-2xl mt-10 mt-8 ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Connect
