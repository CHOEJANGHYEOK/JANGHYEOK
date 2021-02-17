import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllWorkIds, getWorkData } from '../../lib/works'
import Link from 'next/link'

type WorkData = {
    title: string
    type: string
    src: string
    url: string
    repository: string
    participants: string[]
    technologies: string[]
    duration: string
    description: string
    roles: string[]
}

type Props = {
    workData: WorkData
    params?: string
}

const Work = ({ workData }: Props) => {
    return (
        <article className="relative flex flex-col mx-auto max-w-screen-2xl w-11/12 md:w-8/12 mt-36 md:mt-20 mb-16">
            <Link href="/work">
                <a className="flex mb-6 md:mb-0 mx-auto md:absolute inline-block bg-go-back bg-no-repeat bg-8 w-8 h-8 md:top-6 md:left-0 font-roboto font-thin" />
            </Link>
            <section id="work-header" className="flex flex-col mx-auto text-center">
                <h1 id="greeting-about" className="font-roboto-mono font-black leading-normal text-5xl md:text-6xl top-1/3 left-12">
                    {workData.title}
                </h1>
                <h2 className="hidden mt-8 md:inline-block font-roboto-mono font-thin mt-3 text-5xl">
                    {workData.type}
                </h2>
            </section>
            {workData.src &&
                <section id="work-video" className="mt-6 md:mt-16">
                    <video controls className="mx-auto w-11/12" src={require(`../../public/videos/${workData.src}`)} />
                </section>}
            <section id="work-description" className="flex flex-col lg:flex-row justify-between
            mx-auto mt-6 md:mt-16 w-11/12 md:divide-white divide-x divide-solid">
                <div id="info" className="font-roboto-mono pl-2 pr-4 pt-4 pb-4 text-white box-border
                pl-2 pr-4 bg-info-box rounded-md w-full lg:w-4/12 pr-8 text-2xl">
                    {workData.url &&
                        <div id="url" className="w-full inline-block">
                            <p className="font-bold text-xl pl-1 sm:text-3xl md:text-2xl">URL</p>
                            <a href={workData.url} target="_blank">
                                <span className="underline ml-2 mb-4 text-sm overflow-ellipsis inline-block">
                                    {workData.url}
                                </span>
                            </a>
                        </div>}
                    {workData.repository &&
                        <div id="repo" className="w-full inline-block">
                            <p className="font-bold text-xl pl-1 sm:text-3xl md:text-2xl">Repository</p>
                            <a href={workData.repository} target="_blank">
                                <span className="underline ml-2 mb-4 mt-1 text-sm overflow-ellipsis w-full block">
                                    {workData.repository}
                                </span>
                            </a>
                        </div>}
                    {workData.participants.length !== 0 &&
                        <div id="participants">
                            <span className="font-bold text-lg mb-2 pl-1 sm:text-3xl md:text-2xl">
                                {workData.participants.length === 1 ? "Participant" : "Participants"}
                            </span>
                            <p className="ml-2">
                                {workData.participants.map((participant: string, i: number) =>
                                    <span key={i} className="text-sm sm:text-xl mt-1">{participant}</span>)}
                            </p>
                        </div>}
                    <div id="technologies-used">
                        <p className="font-bold text-lg pl-1 mt-4 mb-1 sm:text-3xl md:text-2xl">
                            {workData.technologies.length === 1 ? "Techonolgy" : "Technologies"}
                        </p>
                        <div className="ml-2">
                            {workData.technologies.map((technology: string, i: number) =>
                                <span key={i} className="text-sm sm:text-xl inline-block">{technology}</span>)}
                        </div>
                    </div>
                    <div id="duration" className="hidden lg:inline-block">
                        <p className="font-bold text-xl pl-1 mt-4 mb-1 sm:text-3xl md:text-2xl">Duration</p>
                        <div className="ml-2 text-xl inline-block">
                            {workData.duration}
                        </div>
                    </div>
                </div>
                <div id="detail" className="box-border w-full lg:w-9/12 pl-2 pr-4 py-4
                bg-white rounded-md font-roboto-mono text-lg sm:text-2xl lg:text-xl md:pl-8">
                    <p className="font-bold text-xl pl-1 sm:text-3xl md:text-2xl">Description</p>
                    <p className="mt-2 mb-4 ml-4 md:ml-2">{workData.description}</p>
                    {workData.roles &&
                        (<>
                            <p className="font-bold text-xl pl-1 sm:text-3xl md:text-2xl mt-8">Contributions</p>
                            <p className="mt-4 mb-4 ml-8 md:ml-4">
                                <ul className="list-disc">
                                    {workData.roles.map(role => {
                                        return (
                                            <li className="ml-2 mb-2">
                                                {role}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </p>
                        </>)}
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