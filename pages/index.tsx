import ScrollMouse from '../components/ScrollMouse'
import WorkSlide from '../components/WorkSlide'

const IndexPage = () => (
  <div className="flex align-center w-screen h-screen">
    <h1 className="font-roboto-mono leading-normal text-6xl my-auto ml-24">
      Hello,<br />I'm a web<br /><div className="inline text-point">developer</div><div className="inline text-secondary">.</div>
    </h1>
    <ScrollMouse />
    <WorkSlide />
  </div>
)

export default IndexPage
