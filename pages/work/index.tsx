import WorkBox from '../../components/Work/WorkBox'
import content from '../../works/works.box.json'

const IndexPage = () => {
  return (
    <article id="work-index" className="flex flex-col md:h-100 mt-48 md:mt-14 mx-auto md:max-w-screen-2xl mb-16">
      <div id="work-container"
        className="relative flex flex-col sm:flex-wrap sm:justify-between mx-auto">
        {content.boxes.map(box =>
          <WorkBox
            key={box.id}
            loc={box.loc}
          />
        )}
      </div>
    </article>
  )
}

export default IndexPage
