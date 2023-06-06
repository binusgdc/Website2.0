import { signIn, useSession } from "next-auth/react"
import { type Redirect } from "../../lib/redirect"
import MainLayout from "../../layouts/MainLayouts"

function Admin() {
    const auth = useSession()
    if (auth.status === "unauthenticated") {
        signIn()
    }
    if (auth.status !== "authenticated") {
        return <></>
    }

    const redirects: Redirect[] = [] // fetch?

    return (
        <MainLayout title="Admin">
            <main className="pt-20 w-full flex flex-col justify-start items-center">
                <h1 className="text-4xl text-center">Admin</h1>
                <div className="my-5">
                    <h2 className="text-xl text-center">Redirects</h2>
                    <ul className="flex flex-col justify-start items-center">
                        {redirects.map((r) => (
                            <li className="grid grid-cols-2 py-6" key={r.sourcePath}>
                                <span className="text-center">{r.sourcePath}</span>
                                <span className="text-center">{r.targetUrl.toString()}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </MainLayout>
    )
}

export default Admin
