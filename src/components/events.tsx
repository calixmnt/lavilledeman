import StarEventSection from "./starevent.tsx";
import Title from "./title.tsx";

const Events = () => {
  return (
    <section className="events">
      <Title className="container title-container title-container--events" dotColor="#1e1a1d" title="Les #Events du coin" />
      <h4 className="events__description special-heading">
        En plus des centres culturels que nous possédons, nous avons chaque mois, des évènements organisés par la municipalité. Let's go !
      </h4>
      <section className="star-events">
        <StarEventSection />
      </section>
      <a className="sites__see-more see-more" href="#">
        See more
      </a>
    </section>
  )
}

export default Events;