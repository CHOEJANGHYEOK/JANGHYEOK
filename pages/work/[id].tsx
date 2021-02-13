import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllWorkIds, getWorkData } from '../../lib/works'
import Link from 'next/link'

type WorkData = {
    title: string
    type: string
    src: string
    participants: string[]
    technologies: string[]
    duration: string
    description: string
}

type Props = {
    workData: WorkData
    params?: string
}

const Work = ({ workData }: Props) => {
    return (
        <article className="relative flex flex-col mx-auto max-w-screen-2xl w-8/12 mt-20 mb-16">
            <section id="work-header" className="z-10 flex flex-col mx-auto text-center">
                <Link href="/work">
                    <a className="mb-20 font-roboto font-thin">go back</a>
                </Link>
                <h1 id="greeting-about" className="font-roboto font-black leading-normal text-6xl top-1/3 left-12">
                    {workData.title}
                </h1>
                <h2 className="font-roboto font-thin mt-3 text-5xl">
                    {workData.type}
                </h2>
            </section>
            <section id="work-video" className="mt-16">
                <video controls className="mx-auto w-11/12" src={workData.src} />
            </section>
            <section id="work-description" className="flex flex-row justify-between mx-auto mt-16 w-11/12 divide-white divide-x divide-solid">
                <div id="info" className="w-9/12 pr-8 text-2xl">
                    <div id="participants">
                        <p>Participants</p>
                        {workData.participants.map((participant: string, i: number) => <p key={i}>{participant}</p>)}
                    </div>
                    <div id="technologies-used">
                        <p>Technologies Used</p>
                        {workData.technologies.map((technology: string) => `${technology} `)}
                    </div>
                    <div id="duration">
                        <p>Duration</p>
                        {workData.duration}
                    </div>
                </div>
                <div id="detail" className="pl-8 text-2xl">
                    {workData.description}
                </div>
            </section>
        </article>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllWorkIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const workData = getWorkData(params.id)
    return {
        props: {
            workData
        }
    }
}

export default Work;