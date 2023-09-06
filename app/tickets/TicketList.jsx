import React from 'react'
async function getData() {
    const res = await fetch('http://localhost:1234/tickets')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return  res.json()
}
export default async function TicketList() {
const tickets = await getData()
console.log(tickets)
  return (
    <>
    { tickets.map((ticket) => (
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </div>
                ))}
                {tickets.length === 0 && (
                    <p className="text-center">There are no open tickets</p>
                )}
    </>
  )
}
