import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="z-10 fixed flex justify-center font-roboto-mono font-bold text-white
                            right-0 w-1/12 text-xl bg-secondary h-screen">
            <nav className="flex flex-col justify-between h-5/6 my-auto">
                <Link href="/work">
                    <a className="mx-auto hover:text-point">work</a>
                </Link>
                <Link href="/about">
                    <a className="mx-auto hover:text-point">about</a>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar;