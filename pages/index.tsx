import Layout from '../components/Layout'
import Image from 'next/image'

const IndexPage = () => (
  <Layout title="Home | Janghyeok Choe">
    <h1 className="absolute font-roboto-mono leading-normal text-7xl top-1/3 left-12">
      Hello,<br />I'm a web<br /><div className="inline text-point">developer</div><div className="inline text-secondary">.</div>
    </h1>
    <div id="scroll" className="flex flex-col fixed m-auto font-roboto text-base items-center">
      <Image src="/images/scroll.svg" width="20%" height="20%" />
      <Image src="/images/mouse.svg" width="50%" height="50%" />
      <p className="mt-2">scroll to discover</p>
    </div>
    <div className="w-5/12 ml-auto bg-secondary h-screen" />
  </Layout>
)

export default IndexPage
