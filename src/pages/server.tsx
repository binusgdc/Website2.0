// server side rendering (getServerSideProps)

import { useEffect, useState } from "react"
import { GetServerSidePropsContext } from "next"

interface ServerProps {
    time: string
}

export default function Server({ time }: ServerProps) {
    const [timeNow, setTimeNow] = useState<string>(time)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date(Date.now()).toString())
        }, 1000) // update 'timeNow' setiap 1 detik
        return () => clearInterval(interval)
        /**
         * return ini adalah cleanup function dari useEffect
         * disini kita menghapus (unsubscribe) interval yang sudah dibuat
         * jalan ketika componentnya 'unmounted'
         * https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1
         */
    }, [])

    return (
        <div>
            <h1>Server Side Rendering</h1>
            <p>Ketika page di-refresh maka dia akan fetch data baru (bukan nunjukin real time)</p>
            <p>
                Contoh server time di bawah ketika page ini fetch ke <code>/api/test</code> pakai{" "}
                <code>getServerSideProps()</code>
            </p>

            <p>
                <b>Server time saat page load: </b>
                {time}
            </p>

            <p>
                Ini baru real time pakai <code>useEffect()</code>
            </p>
            <p>
                <b>Real time: </b>
                {timeNow}
            </p>
        </div>
    )
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    /**
     * getServerSideProps() ini akan dijalankan di server
     * jadi dia bisa fetch data dari database
     */

    const protocol = req.headers["x-forwarded-proto"] || "http"
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ""
    const res = await fetch(baseUrl + "/api/test") // kalau mau pakai axios jg bisa (npm install axios)
    /**
     * Ini cuma contoh fetch data dari API
     * Nggk direkomen fetch api internal dari getServerSideProps
     * Kenapa? karena jadinya nanti ada 2x fetch data
     * dari getServerSideProps lanjut ke API. [Kasian servernya :)]
     * Contoh kalau mau ambil data artikel dari database lebih baik logicnya langsung ditaruh di sini.
     */
    const data = await res.json()

    return {
        props: {
            ...data,
        },
    }
}
