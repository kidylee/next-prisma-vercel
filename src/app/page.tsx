'use client'
import {getUser} from "@/app/actions";
import {User} from "@prisma/client";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LikeButton/>
        </main>
    );
}
import {useState} from 'react'

function LikeButton() {
    const [users, setUsers] = useState<User[]>()

    return (
        <>
            <p>Total Likes: {users?.length}</p>
            <button
                onClick={async () => {
                    const user = await getUser()
                    setUsers(user)
                }}
            >
                Like
            </button>
        </>
    )
}