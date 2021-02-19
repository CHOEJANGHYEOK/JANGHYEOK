import Image from 'next/image'

const AboutPage = () => (
  <article className="mx-auto max-w-screen-2xl w-8/12 mt-48 mb-16">
    <section>
      <h1 id="greeting-about" className="font-roboto-mono leading-normal text-2xl sm:text-5xl top-1/3 left-1/3 mr-8">
        Hello, I'm Janghyeok Choe.<br />I'm a korean web developer.
        </h1>
    </section>
    <section className="about-me mt-10 font-roboto font-light w-full text-lg sm:text-2xl">
      <p className="flex align-center space-x-4">
        <Image src="/images/technologies.svg" width={16} height={16} />
        <span className="self-center">HTML5, CSS3, JavaScript, React, Redux, Jest, Enzyme, Python, Django</span>
      </p>
      <p className="flex space-x-4 align-center mt-5">
        <Image src="/images/interest.svg" width={16} height={16} />
        <span className="self-center">Web Development, UI/UX Design</span>
      </p>
      <p className="flex space-x-4 align-center mt-5">
        <Image src="/images/graduate.svg" width={16} height={16} />
        <span className="self-center">Seoul National University</span>
      </p>
      <p className="flex space-x-4 align-center mt-5">
        <Image src="/images/major.svg" width={16} height={16} />
        <span className="self-center">Computer Science & Engineering<br />Business Administration</span>
      </p>
    </section>
  </article>
)

export default AboutPage
