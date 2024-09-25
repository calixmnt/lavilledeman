import { newsCardData } from "../lib/constant.ts"
import NewCard from "./newcard.tsx"
import Title from "./title.tsx"

const News = () => {
  return (
    <div className="container news">
        <Title dotColor="#1e1a1d" title="Les #News" />
        <h4 className="sites__description special-heading">
        Toutes les actualités concernants notre ville sont ici ! Nous nous efforçons à vous les fournir en temps réèl et sans ambiguités.
      </h4>
      <a className="news__see-more see-more" href="#">
        See more
      </a>
      <section className="news__items">
      {newsCardData.map((card, index) => (
        <NewCard
          key={index}
          number={card.number}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
      </section>
    </div>
  )
}

export default News