import React from 'react'
import Image from 'next/image'

export default function Comments() {
    return (
        <>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi nobis
                    dolorum magni distinctio iusto explicabo voluptatibus sint, esse et, voluptatem
                    aperiam error id sapiente earum dolorem placeat ad quisquam.
                </p>
                <div className="">
                    <Image
                        src={"/9k.png"}
                        alt="photo"
                        width={300}
                        height={300}
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </div>
        </>
  )
}
