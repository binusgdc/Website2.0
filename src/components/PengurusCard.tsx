import Image from "next/image"

export type PengurusCardProps = {
    fullName: string
    jabatanName: string
    portraitImagePath: string
}

const PengurusCard = ({ fullName, jabatanName, portraitImagePath }: PengurusCardProps) => {
    return (
        <div className="text-center pt-4 grid place-items-center">
            <div className="border-orange-300 bg-orange-300 w-[200px] h-[200px] rounded-full border-4">
                <Image
                    className="object-cover"
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
