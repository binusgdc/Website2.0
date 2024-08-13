import Image from "next/image"
import { useState } from "react"

export type PengurusCardProps = {
    fullName: string
    jabatanName: string
    portraitImagePath: string
    outlineColorHex: string
}

const PengurusCard = ({ fullName, jabatanName, portraitImagePath, outlineColorHex }: PengurusCardProps) => {
    const [isLoaded, setLoaded] = useState(false)
    return (
        <div className="text-center pt-4 grid place-items-center">
            <div
                className={`w-[200px] h-[200px] rounded-full border-8`}
                style={{
                    borderColor: outlineColorHex,
                    backgroundColor: outlineColorHex
                }}
            >
                <Image
                    onLoad={(_e) => {
                        setLoaded(true)
                    }}
                    className={`object-cover rounded-full transition-opacity ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    src={portraitImagePath}
                    alt={fullName}
                    width={200}
                    height={200}
                />
            </div>
            <h3 className="my-4 font-bold break-normal text-lg md:text-lg">{fullName}</h3>
            <p className="text-sm md:text-sm font-semibold">{jabatanName}</p>
        </div>
    )
}

export default PengurusCard
