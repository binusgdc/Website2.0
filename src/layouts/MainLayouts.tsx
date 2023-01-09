import Head from "next/head"
import React from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"

interface MainProps {
    children: React.ReactNode
    title: string
}

export default function MainLayout(props: MainProps) {
    const { children: chilren, title } = props

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {chilren}
            <Footer />
        </>
    )
}
