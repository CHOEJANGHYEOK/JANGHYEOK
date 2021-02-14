import Link from 'next/Link'
import Image from 'next/Image'

type Props = {
    key: string,
    loc: string,
    bg: string,
    imgw: string,
    imgh: string
}

const WorkBox = ({ loc, bg }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a id={loc} className={`box-container bg-${bg} flex justify-center`}>
            </a>
        </Link>
    )
}

export default WorkBox