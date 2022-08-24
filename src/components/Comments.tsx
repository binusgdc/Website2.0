import React from "react"
import Image from "next/image"

interface commentsData {
    commentdata: {
        name: string
        title: string
        testimoni: string
        img: string
    }
}

export default function Comments(data: commentsData) {
    return (
        <div className="w-[397px] overflow-hidden text-sm relative bg-white rounded-xl shadow-xl">
            <p className="overflow-hidden p-[32.5px]">{data.commentdata.testimoni}</p>
            <div className="flex px-[32.5px] pb-[32.5px] items-center">
                <Image
                    src={data.commentdata.img}
                    alt="photo"
                    width={64}
                    height={64}
                    objectFit="cover"
                    className="rounded-full"
                />
                <div className="px-[17px]">
                    <h4 className="font-bold">{data.commentdata.name}</h4>
                    <h5 className="font-semibold">{data.commentdata.title}</h5>
                </div>
            </div>
        </div>
    )
}
