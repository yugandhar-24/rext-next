"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { useState } from "react"
export default function CreateForm() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const ticket = {
            title, body, priority, user_email: 'yuga@gmail.com'
        }

        const res = await fetch('http://localhost:1234/tickets', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(ticket)
        })
        if(res.status === 201)
        {
            router.refresh()
            router.push('/tickets')
        }
    }
    return (
        <form className="w-1/2" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button className="btn-primary" disabled={isLoading} >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}
