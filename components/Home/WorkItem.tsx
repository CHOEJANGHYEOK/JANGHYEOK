import React from 'react'
import Link from 'next/link'

type Props = {
    loc: string
    bg: string
}

const WorkItem = ({ loc, bg }: Props) => {
    return (
        <Link href={`/work/${loc}`}>
            <a className={`bg-${bg} mx-auto item-container`} />
        </Link>
    )
}

export default WorkItem