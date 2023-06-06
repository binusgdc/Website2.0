import Image from "next/image"

export type PengurusCardProps = {
    fullName: string
    jabatanName: string
    portraitImagePath: string
}

const PengurusCard = ({ fullName, jabatanName, portraitImagePath }: PengurusCardProps) => {
    return (
        <div className="text-center pt-8 ">
            <div className="max-w-xs max-h-xs bg-white grid place-items-center">
                <Image
                    className="rounded-xl object-cover"
                    src={portraitImagePath}
                    alt={fullName}
                    width={175}
                    height={225}
                />
            </div>
            <h3 className="my-4 font-bold break-normal text-lg md:text-lg">{fullName}</h3>
            <p className="text-sm md:text-sm font-semibold">{jabatanName}</p>
        </div>
    )
}

export default PengurusCard
