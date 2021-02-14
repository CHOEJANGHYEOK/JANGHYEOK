import Link from 'next/Link'
import WorkBox from '../../components/WorkBox'
import content from '../../works/works.box.json'

const IndexPage = () => {
  return (
    <article id="work-index" className="flex flex-col h-100 mt-14 mx-auto max-w-screen-2xl mb-16">
      <div style={{ height: '49.875rem', width: '56.725rem' }}
        className="flex flex-col flex-wrap justify-between mx-auto ">
        {content.boxes.map(box =>
          <WorkBox
            key={box.id}
            loc={box.loc}
            bg={box.bg}
            imgw={box.width}
            imgh={box.height}
          />
        )}
      </div>
    </article>
  )
}

export default IndexPage
