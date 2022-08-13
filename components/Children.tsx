import React from 'react'


interface Props {
    children: React.ReactNode
}


export default function Component({ children }: Props) {
    return (
        <div>
            <h1>Title buat Children</h1>
            {children}
        </div>
    )
}
