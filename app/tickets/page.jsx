import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default async function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            {/* <TicketList/> */}
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}
