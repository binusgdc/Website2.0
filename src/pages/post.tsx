import { useState } from "react"

import connect from "../libs/databse"
import User from "../model/user"

interface PostProps {
    users: {
        first_name: string
        last_name: string
        handle: string
    }[]
}

export default function Post({ users }: PostProps) {
    const [data, setData] = useState(users)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const first = e.currentTarget.first.value
        const last = e.currentTarget.last.value
        const handle = e.currentTarget.handle.value
        setData([...data, { first_name: first, last_name: last, handle }])
        e.currentTarget.first.value = ""
        e.currentTarget.last.value = ""
        e.currentTarget.handle.value = ""
        await fetch("/api/db", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ first_name: first, last_name: last, handle }),
        })
    }

    return (
        <div className="container p-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.handle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter first name"
                    aria-label="First Name"
                    id="first"
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Last name"
                    aria-label="Last Name"
                    id="last"
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter handle"
                    aria-label="Handle"
                    id="handle"
                />
                <button className="btn btn-primary" type="submit">
                    Sumbit
                </button>
            </form>
        </div>
    )
}

export async function getServerSideProps() {
    await connect()
    const users = await User.find({}, "-_id -__v").lean()
    return {
        props: {
            users,
        },
    }
}
