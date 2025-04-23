import './PersonSection.css';
import NavFooter from "../../components/NavFooter/NavFooter";

const PersonSection = () => {
  return (
  <section className="person-info">
    <div className="person-info__container container-main">
      <div className="person-info--wrapper">
        <h2 className="person-info__title">Hi, I’m Paulina 👋</h2>
        <div className="person-info__introduction">
          <p className="person-info__intro">I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
          <p className="person-info__intro">I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!</p>
        </div>
      <NavFooter/>
        </div>
      </div>
  </section>
  )
}

export default PersonSection