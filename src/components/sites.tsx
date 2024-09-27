import StarPlacesSection from "./starplace.tsx";
import Title from "./title.tsx";

const Sites = () => {
  return (
    <section className="sites">
      <Title className="container title-container title-container--sites" dotColor="#1e1a1d" title="Les coins #Chics de Man" />
      <h4 className="sites__description special-heading">
        Les endroits populaires en ce moment chez nous. Explorez de nouveaux
        horizons
      </h4>
      <section className="star-places">
        <StarPlacesSection />
      </section>
      <a className="sites__see-more see-more" href="#">
        See more
      </a>
    </section>
  );
};

export default Sites;
