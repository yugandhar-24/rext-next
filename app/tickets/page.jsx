import TicketList from "./TicketList";

export default async function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <TicketList/>
        </main>
    )
}
