import StarPlace from "./starplace.tsx";
import Title from "./title.tsx";

const Sites = () => {
  return (
    <section className="sites">
      <Title
        dotColor="#1e1a1d"
        title="Les coins #Chics de Man"
      />
      <h4 className="sites__description special-heading">Les endroits populaires en ce moment chez nous.</h4>
      <section className=" container star-places">
        <StarPlace label="Label" data="2021" activities={["1", "2"]}/>
        <StarPlace label="Label2" data="2022" activities={["3", "4"]}/>
        <StarPlace label="Label3" data="2023" activities={["5", "6"]}/>
      </section>
      <a className="sites__see-more see-more" href="#">See more</a>
    </section>
  )
}

export default Sites;