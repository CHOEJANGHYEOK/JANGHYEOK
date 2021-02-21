import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="z-30 fixed flex md:justify-center font-roboto-mono text-2xl md:text-xl font-light md:font-bold
                            top-10 right-10 md:top-auto md:right-0 md:w-1/12 md:bg-secondary md:h-screen">
            <nav className="flex flex-col md:justify-between h-5/6 my-auto text-white">
                <Link href="/work">
                    <a className="ml-auto md:mx-auto hover:text-point">work</a>
                </Link>
                <Link href="/about">
                    <a className="ml-auto md:mx-auto hover:text-point">about</a>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar;