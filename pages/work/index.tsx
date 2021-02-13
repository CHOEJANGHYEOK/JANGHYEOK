import WorkBox from '../../components/WorkBox'
import content from '../../works/works.box.json'

const IndexPage = () => {
  return (
    <article className="h-screen flex flex-col flex-wrap space-x-4 justify-center align-center mx-auto max-w-screen-2xl w-8/12 mb-16">
      {content.boxes.map(box => 
        <WorkBox 
          key={box.id}
          loc={box.loc}
          imgsrc={box.src}
          imgw={box.width}
          imgh={box.height}
        />
      )}
    </article>
  )
}

export default IndexPage
