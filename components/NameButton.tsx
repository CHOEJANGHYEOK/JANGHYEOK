import Link from 'next/link'

const NameButton = () => {
    return (
        <Link href="/">
            <a id="name-button"
                className="text-sm left-10 top-10 sm:left-10 sm:top-10 absolute md:top-14 md:left-14 font-roboto font-light
                hover:text-point tracking-square md:relative md:text-sm leading-6">
                JANG<br />HYEOK<br />CHOE
            </a>
        </Link>
    )
}

export default NameButton