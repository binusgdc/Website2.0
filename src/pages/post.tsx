import { useState } from "react"

export default function Post() {
    const [data, setData] = useState([
        {
            first: "John",
            last: "Doe",
            handle: "@johndoe",
        },
        {
            first: "Alex",
            last: "Smith",
            handle: "@alexsmith",
        },
    ])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const first = e.currentTarget.first.value
        const last = e.currentTarget.last.value
        const handle = e.currentTarget.handle.value
        setData([...data, { first, last, handle }])
        e.currentTarget.first.value = ""
        e.currentTarget.last.value = ""
        e.currentTarget.handle.value = ""
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
                            <td>{item.first}</td>
                            <td>{item.last}</td>
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
