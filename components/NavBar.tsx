import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="flex fixed w-screen top-12 px-12">
            <Link href="/">
                <a className="font-roboto relative text-sm leading-9">J A N G H Y E O K<br/>C H O E</a>
            </Link>
            <div className="font-raleway relative font-extrabold ml-auto text-2xl">
                <Link href="/about">
                    <a className="ml-auto">about</a>
                </Link>
                <Link href="/work">
                    <a className="ml-32">work</a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;