import React from 'react'
import Link from 'next/link'

type Props = {
    loc: string
    bg: string
}

const WorkItem = ({ loc, bg }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a id={bg} className={`mx-auto md:mx-0 item-container`} />
        </Link>
    )
}

export default WorkItem