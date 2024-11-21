'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useSession, signOut, signIn} from 'next-auth/react'

const NavBar = () => {
    const {data: session} = useSession()
    
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width ={144} height={30}/>
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <button onClick={()=>signOut()}>
                                <span>Logout</span>
                            </button>
                            <Link href={`/user/${session.user.id}`}>
                                <span>{session.user.name}</span>
                            </Link>
                        </>
                    ): (
                        <>
                            <button onClick={() => signIn('google')}>
                                <span>Login</span>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default NavBar