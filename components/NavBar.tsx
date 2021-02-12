import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="flex fixed w-screen top-14 px-14">
            <Link href="/">
                <a id="name-button" className="font-roboto font-light hover:text-point tracking-square relative text-sm leading-6">JANG<br/>HYEOK<br/>CHOE</a>
            </Link>
            <div className="font-roboto font-light ml-auto text-xl ">
                <Link href="/about">
                    <a className="ml-auto hover:text-point">about</a>
                </Link>
                <Link href="/work">
                    <a className="ml-32 hover:text-point">work</a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;