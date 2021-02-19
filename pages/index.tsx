import WorkList from '../components/Home/WorkList'

const IndexPage = () => (
  <div className="flex align-center justify-center w-screen h-screen">
    <h1 id="home-greeting"
      className="absolute md:relative font-roboto-mono leading-normal text-4xl mt-36 text-center md:text-6xl md:text-left md:my-auto md:ml-24">
      Hello,<br className="hidden md:inline-block" /> I'm a <br className="md:hidden" />web<br className="hidden md:inline-block" /> <div className="inline text-point">developer</div>
      <div className="inline text-secondary">.</div>
    </h1>
    <WorkList />
  </div>
)

export default IndexPage
