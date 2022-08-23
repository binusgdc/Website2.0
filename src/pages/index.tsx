import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Comments from "../components/Comments"

const dat2 = {
    name: "Audrey L",
    title: "Aktivis Community Development",
    testimoni: "Proin pretium luctus ligula eget tempor. Vivamus pharetra elementum dui non posuere. Phasellus tristique dolor massa, sit amet cursus purus tincidunt quis. Duis tempus ante sit amet eros tempor, quis consequat enim imperdiet.",
    img: "/Ellipse.png",
}

const Home: NextPage = () => {
    return <>
            <Comments data={dat2} />
    </>
}

export default Home
