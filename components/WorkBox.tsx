import Link from 'next/Link'
import Image from 'next/Image'

type Props = {
    key: string,
    loc: string,
    imgsrc: string,
    imgw: string,
    imgh: string
}

const WorkBox = ({ loc, imgsrc, imgw, imgh }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a className="flex justify-center">
                <Image
                    src={imgsrc}
                    width={imgw}
                    height={imgh}
                />
            </a>
        </Link>
    )
}

export default WorkBox