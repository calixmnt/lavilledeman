import { ArrowRightIcon } from "@radix-ui/react-icons";
import { starPlacesData } from "../lib/constant.ts";
import CircleSpan from "./circlespan.tsx";

type StarPlaceProps = {
  label: string;
  activities: string[];
  data: string;
};

const StarPlace = ({ label, activities, data }: StarPlaceProps) => {
  return (
    <div className="star-places__item">
      <h3 className="container third-heading">{label}</h3>
      <ul className="star-place__activities">
        {activities.map((activity, index) => (
          <CircleSpan label={activity} key={index}/>
        ))}
      </ul>
      <div className="container sss">
        {data} <ArrowRightIcon width={25} height={25} />
      </div>
    </div>
  );
};

const StarPlacesSection = () => {
  return (
    <section className="star-places">
      <section className="title">
        <span className="title--activities special-heading">activités</span>
        <span className="title--data container special-heading">date</span>
      </section>

      {
        starPlacesData.map((place, i) => (
          <StarPlace key={i} {...place} />
        ))
      }
      
    </section>
  );
};

export default StarPlacesSection;
