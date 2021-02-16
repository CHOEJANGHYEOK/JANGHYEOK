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
        <article className="relative flex flex-col mx-auto max-w-screen-2xl w-8/12 mt-48 md:mt-20 mb-16">
            <Link href="/work">
                <a className="absolute inline-block bg-go-back bg-no-repeat bg-8 w-8 h-8 top-6 left-6 font-roboto font-thin" />
            </Link>
            <section id="work-header" className="flex flex-col mx-auto text-center">
                <h1 id="greeting-about" className="font-roboto font-black leading-normal text-6xl top-1/3 left-12">
                    {workData.title}
                </h1>
                <h2 className="font-roboto font-thin mt-3 text-5xl">
                    {workData.type}
                </h2>
            </section>
            {workData.src &&
                <section id="work-video" className="mt-16">
                    <video controls className="mx-auto w-11/12" src={require(`../../public/videos/${workData.src}`)} />
                </section>}
            <section id="work-description" className="flex flex-row justify-between mx-auto mt-16 w-11/12 divide-white divide-x divide-solid">
                <div id="info" className="w-9/12 pr-8 text-2xl">
                    {workData.participants.length !== 0 &&
                        <div id="participants">
                            <p>Participants</p>
                            {workData.participants.map((participant: string, i: number) => <p key={i}>{participant}</p>)}
                        </div>}
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
    let workData = { id: "quantcash" }
    if (params !== undefined) {
        workData = getWorkData(Array.isArray(params.id) ? params.id[0] : params.id)
    }
    return {
        props: {
            workData
        }
    }
}

export default Work;