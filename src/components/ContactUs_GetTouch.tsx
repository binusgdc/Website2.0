import Image from "next/image"
const GetTouch = () => {
    return (
        <>
            <main className=" content-center bg-neutral-700">
                <div className="  pt-20 pb-24">
                    <h1 className="m-auto font-bold text-white p-10 w-max text-5xl">
                        Get in Touch
                    </h1>
                    <div className="container max-w-5xl mx-auto mt-16">
                        <div className="px-8 lg:px-auto m-4 md:grid  gap-12 grid-cols-3  ">
                            <div className="text-center pt-8 ">
                                <div className="w-full   grid place-items-center">
                                    <img
                                        src="/images/discord.png"
                                        className="h-14 max-w-min"
                                        alt=""
                                    />{" "}
                                </div>
                                <h1 className="mt-1 text-white text-xl font-bold">Community </h1>{" "}
                                <p className="mt-2 text-white  font-light">
                                    Tempat dimana para game developer bertemu dan berbincang tentang
                                    hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                    mencakupi berbagai interest.
                                </p>
                            </div>

                            <div className="text-center pt-8 ">
                                <div className="w-full   grid place-items-center">
                                    <img src="/images/line.png" className="h-14 max-w-min" alt="" />{" "}
                                </div>
                                <h1 className="mt-1 text-white text-xl font-bold">Line</h1>{" "}
                                <p className="mt-2 text-white  font-light">
                                    Tempat dimana para game developer bertemu dan berbincang tentang
                                    hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                    mencakupi berbagai interest.
                                </p>
                            </div>

                            <div className="text-center pt-8 ">
                                <div className="w-full   grid place-items-center">
                                    <img
                                        src="/images/email.png"
                                        className="h-14 max-w-min "
                                        alt=""
                                    />{" "}
                                </div>
                                <h1 className="mt-1 text-white text-xl font-bold">Email </h1>{" "}
                                <p className="mt-2 text-white  font-light">
                                    Bagi yang ingin berkolaborasi dan urusan penting lainnya bisa
                                    langsung menghubungi email kami di bgdc@binus.ac.id
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default GetTouch
