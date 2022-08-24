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

export default function Comments({ commentdata }: commentsData) {
    const { name, title, testimoni, img } = commentdata

    return (
        <div className="max-w-sm m-3 overflow-hidden text-sm relative bg-white rounded-xl shadow-xl">
            <p className="overflow-hidden p-8">{testimoni}</p>
            <div className="flex px-8 pb-8 items-center">
                <Image
                    src={img}
                    alt="photo"
                    width={64}
                    height={64}
                    objectFit="cover"
                    className="rounded-full"
                />
                <div className="px-[17px]">
                    <h4 className="font-bold">{name}</h4>
                    <h5 className="font-semibold">{title}</h5>
                </div>
            </div>
        </div>
    )
}
