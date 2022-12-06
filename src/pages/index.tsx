import type { NextPage } from "next"

import Gamelist from "../components/GameKami"

const dat2 = {
    title1: "CHAOS WEEKLY",
    title2: "The Cursed Wheep",
    title3: "Hell Dodge",
    desc1: "Play as a magazine ediot, trying to get money by making covers and headlines. Make the world chaotic with the power of hoax for raking in the cash, but going overboard will get you in trouble!",
    desc2: "Help the Wolf and the Sheep break the curse in the mysterious forest, in this simple yet amusing platformer developed by BGDC.",
    desc3: "Hell Dodge is an event organized by Satan and sponsored by God Himself! Participants will need to endure the rains of arrows and cannonballs for as long as they can. Whoever last the longest would win and be bestowed upon a reward that their heart desires.",
    made: "Game dibuat untuk:",
    event1: "Brackeys Game Jam 2020.2",
    event2: "GMTK Game Jam 2021",
    event3: "Talent Group BGDC Batch 2",
    unity: "/images/unity.png",
    logo1: "/images/logo1.png",
    logo2: "/images/logo2.png",
    logo3: "/images/logo3.png",
    report: "/images/report.png",
    wheep: "/images/wheep.png",
    charselect: "/images/charselect.png",
    pic2: "/images/pic2.png",
    pic3: "/images/pic3.png",
    pic4: "/images/pic4.png",
    hex1: "/images/hex1.png",
    hex2: "/images/hex2.png",
}

const Home: NextPage = () => {
    return (
        <>
            <Gamelist gamedata={dat2} />
        </>
    )
}

export default Home
