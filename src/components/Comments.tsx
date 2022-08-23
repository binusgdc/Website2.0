import React from "react"
import Image from "next/image"

// Schema Data Comments
// const dat2 = {
//     name: "Audrey L",
//     title: "Aktivis Community Development",
//     testimoni: "Proin pretium luctus ligula eget tempor. Vivamus pharetra elementum dui non posuere. Phasellus tristique dolor massa, sit amet cursus purus tincidunt quis. Duis tempus ante sit amet eros tempor, quis consequat enim imperdiet.",
//     img: "/Ellipse.png",
// }

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
