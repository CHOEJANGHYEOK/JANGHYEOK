import React from 'react'
import Image from 'next/image'

const ScrollMouse = () => {
    return (
        <div id="scroll" className="hidden md:flex flex-col fixed m-auto font-roboto text-base items-center">
            <Image id="scroll-arrow" src="/images/scroll.svg" width="20%" height="20%" />
            <Image src="/images/mouse.svg" width="50%" height="50%" />
            <p className="mt-2 -translate-y-12 ease-in" id="scroll-to-discover">scroll to discover</p>
        </div>
    )
}

export default ScrollMouse