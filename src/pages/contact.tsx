// getStaticProps

import Children from "../components/Children"
import Style from "../styles/Home.module.css"
/**
 * import scoped css
 * css ini hanya berlaku di component ini saja
 */

interface Contacts {
    name: string
    age: number
}

interface ContactProps {
    contacts: Contacts[]
}

// Naming convention (default react): huruf awal komponen HARUS Kapital
export default function Contact({ contacts }: ContactProps) {
    return (
        <div>
            <h1>contact Page</h1>
            {contacts.map(
                (
                    contact,
                    index // mapping tiap contact
                ) => (
                    <div key={index} className={Style.background}>
                        <p>Name: {contact.name}</p> {/* tanda {} buat nampilkan value ke html */}
                        <p>Age: {contact.age}</p>
                        <hr />
                    </div>
                )
            )}
            <Children>
                <button>a</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
            </Children>
        </div>
    )
}

export async function getStaticProps() {
    /**
     * Seperti namanya get'Static'Props
     * data hanya diambil sekali ketika project di-build ([npm|yarn] run build)
     */
    const dataContact = [
        { name: "Ganyu", age: 3000 },
        { name: "Keqing", age: 20 },
        { name: "Klee", age: 7 },
    ]

    return {
        props: {
            contacts: dataContact,
        },
    }
}
