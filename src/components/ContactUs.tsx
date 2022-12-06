const ContactUs = () => {
    return (
        <>
            <main className=" flex  content-center bg-neutral-700">
                <div className=" pt-28 pb-32">
                    <h1 className="m-auto font-bold text-white p-10 w-max text-5xl">
                        Get in Touch
                    </h1>
                    <div className="pt-10 flex justify-center lg:flex-row flex-col  items-center ">
                        <div className="mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-center flex-col items-center text-center">
                            {" "}
                            <img src="/discord.png" className="h-14 max-w-min" alt="" />{" "}
                            <h1 className="mt-1 text-white font-bold">Community </h1>{" "}
                            <p className="mt-2 text-white text-xs font-light">
                                Tempat dimana para game developer bertemu dan berbincang tentang
                                hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                mencakupi berbagai interest.
                            </p>
                        </div>
                        <div className="lg:mt-0 mt-20 mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-center flex-col items-center text-center">
                            {" "}
                            <img src="/line.png" className="h-14 max-w-min" alt="" />{" "}
                            <h1 className="mt-1 text-white font-bold">Line </h1>{" "}
                            <p className="mt-2 text-white text-xs font-light">
                                Tempat dimana para game developer bertemu dan berbincang tentang
                                hobi masing-masing. Terdapat banyak sub komunitas juga yang
                                mencakupi berbagai interest.
                            </p>
                        </div>
                        <div className="lg:mt-0 mt-20 mr-8 ml-8 lg:w-1/6 w-2/5 flex justify-top flex-col items-center text-center">
                            {" "}
                            <img src="/email.png" className="h-14 max-w-min" alt="" />{" "}
                            <h1 className="mt-1 text-white font-bold">Email </h1>{" "}
                            <p className="mt-2 text-white text-xs text-center font-light">
                                Bagi yang ingin berkolaborasi dan urusan penting lainnya bisa
                                langsung menghubungi email kami di bgdc@binus.ac.id
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ContactUs
