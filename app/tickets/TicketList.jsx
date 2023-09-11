import Link from 'next/link'
import {notFound} from "next/navigation"

import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:1234/tickets', {
        next: {
            revalidate:  0
        }
    })
    if (!res.ok) {
        notFound()
        // throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function TicketList() {
    await new Promise(resolve =>setTimeout(resolve,3000))
    const tickets = await getData()
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>  
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
            )}
        </>
     )
}
