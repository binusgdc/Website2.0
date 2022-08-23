import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Comments from "../components/Comments"

const Home: NextPage = () => {
    return <Comments />
}

export default Home
