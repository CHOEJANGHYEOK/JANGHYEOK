import Link from 'next/link'

const NameButton = () => {
    return (
        <Link href="/">
            <a id="name-button"
                className="top-14 left-14 font-roboto font-light
                hover:text-point tracking-square relative text-sm leading-6">
                JANG<br />HYEOK<br />CHOE
            </a>
        </Link>
    )
}

export default NameButton