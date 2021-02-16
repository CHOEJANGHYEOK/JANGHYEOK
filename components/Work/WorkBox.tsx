import Link from 'next/link'

type Props = {
    key: string,
    loc: string,
    bg: string,
}

const WorkBox = ({ loc, bg }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a id={loc} className={`box-container w-full bg-${bg} mx-auto flex justify-center`}>
            </a>
        </Link>
    )
}

export default WorkBox