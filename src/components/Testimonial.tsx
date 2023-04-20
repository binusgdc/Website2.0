import Image from "next/image"

export type TestimonialProps = {
    personName: string
    personTitle: string
    profileImagePath: string
    statement: string
}

const Testimonial = ({
    personName,
    personTitle,
    profileImagePath,
    statement,
}: TestimonialProps) => {
    return (
        <>
            <article className="break-inside mb-4 p-6 rounded-xl bg-white  flex flex-col bg-clip-border">
                <p className="">{statement}</p>

                <div className="flex pb-6 items-center justify-between">
                    <div className="flex mt-8 ">
                        <a className="inline-block mr-4" href="#">
                            <Image
                                className="rounded-full max-w-none w-12 h-12"
                                src={profileImagePath}
                                width={48}
                                height={48}
                                alt={`profile picture of ${personName}`}
                            />
                        </a>
                        <div className="flex flex-col">
                            <div>
                                <a className="inline-block text-lg font-bold " href="#">
                                    {personName}
                                </a>
                            </div>
                            <div className="text-slate-500">{personTitle}</div>
                        </div>
                    </div>
                </div>
            </article>
            <style jsx>{`
                .break-inside {
                    -moz-column-break-inside: avoid;
                    break-inside: avoid;
                }
            `}</style>
        </>
    )
}

export default Testimonial
