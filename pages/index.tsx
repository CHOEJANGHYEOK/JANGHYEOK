import ScrollMouse from '../components/ScrollMouse'

const IndexPage = () => (
  <>
    <h1 className="absolute font-roboto-mono leading-normal text-5xl top-1/3 left-12">
      Hello,<br />I'm a web<br /><div className="inline text-point">developer</div><div className="inline text-secondary">.</div>
    </h1>
    <ScrollMouse />
    <div className="w-3/12 ml-auto bg-secondary h-screen" />
  </>
)

export default IndexPage
