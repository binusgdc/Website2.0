const ContactUs = () => {
    return (
        <div className="  p-16 dark:bg-neutral-800  justify-center  font-body content-c">
            <div className=" flex text-3xl justify-center text-white font-bold ">
                Any Questions?
            </div>

            <div className="flex-initial justify-center mt-6 mb-6 text-xs text-white text-center  ">
                Untuk pertanyaan mengenai pendaftaran, kerja sama dan lainnya silahkan hubungi kami
                di link dibawah ini
            </div>

            <div className=" flex justify-center ">
                <button className="flex justify-center bg-gradient-to-b from-amber-500 via-yellow-400 to-yellow-300 text-white text-sm font-medium py-1.5 px-4 rounded-3xl">
                    Contact Us
                </button>
            </div>
        </div>
    )
}
export default ContactUs
