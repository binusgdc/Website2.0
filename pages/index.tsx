import type { NextPage } from 'next'
import Head from 'next/head'


import { useState } from 'react';
/**
 * Macam-macam React hooks
 * useState -> untuk mengatur state
 * useEffect -> untuk mengatur lifecycle sebuah component
 * useContext -> untuk mengatur dan menyimpan context (contoh: user login, tema, bahasa, dll)
 * 
 * Hooks lainnya => https://reactjs.org/docs/hooks-reference.html
 * 
 */



const Home: NextPage = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

    return (
        <div>
            Hello World
            <h1 style={{ backgroundColor: "black", color: "white" }}>{count}</h1>
            <button onClick={
                () => {
                    setCount(count + 1);
                }
            }>add</button>
            { count % 2 === 0 ? <h3>Genap</h3> : <h3>Ganjil</h3> } {/* Conditional rendering dengan ternary operator */}
            { count > 5 && <h3>Lebih dari 5</h3> } {/* Conditional rendering dengan && (hanya render ketika count > 5) */}

            <hr />
            <button onClick={
                () => {
                    setText(text === "Hello World" ? "" : "Hello World");
                }
            }>{text === "Hello World" ? "hide" : "show"}</button>
            <h1>{text}</h1>

            <Head>
                <title>Index</title>
            </Head>
        </div>
    )
}

export default Home
