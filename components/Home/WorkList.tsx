import React from 'react'
import content from '../../works/works.item.json'
import Link from 'next/link'
import WorkItem from './WorkItem'

const WorkSlide = () => {
    return (
        <ul id="work-list" className="absolute md:relative top-72 md:top-0 mx-auto my-auto flex flex-col space-y-4 md:space-y-6 list-none w-screen h-screen">
            {content.items.map((item, i) => {
                return (
                    <li key={i}>
                        <WorkItem
                            key={item.id}
                            loc={item.loc}
                            bg={item.bg}
                        />
                    </li>
                )
            })}
            <li>
                <Link href="/work">
                    <a id="show-more" className={`bg-show-more mx-auto md:mx-0 item-container`} />
                </Link>
            </li>
        </ul>
    )
}

export default WorkSlide