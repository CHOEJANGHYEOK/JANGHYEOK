import Link from 'next/link'

type Props = {
    key: string,
    loc: string,
}

const WorkBox = ({ loc }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a id={loc} className={`box-container w-full mx-auto flex justify-center`}>
            </a>
        </Link>
    )
}

export default WorkBox