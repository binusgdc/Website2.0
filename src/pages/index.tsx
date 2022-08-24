import type { NextPage } from "next"

import Comments from "../components/Comments"

const dat2 = {
    name: "Audrey L",
    title: "Aktivis Community Development",
    testimoni:
        "Proin pretium luctus ligula eget tempor. Vivamus pharetra elementum dui non posuere. Phasellus tristique dolor massa, sit amet cursus purus tincidunt quis. Duis tempus ante sit amet eros tempor, quis consequat enim imperdiet.",
    img: "/images/Ellipse.png",
}

const Home: NextPage = () => {
    return (
        <>
            <Comments commentdata={dat2} />
        </>
    )
}

export default Home
