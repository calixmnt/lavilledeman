import { ArrowRightIcon } from "@radix-ui/react-icons";
import { starPlacesData } from "../lib/constant.ts";

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
          <li key={index} className="activity">
            {activity}
          </li>
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
        <span className="title--activities special-heading">activities</span>
        <span className="title--data container special-heading">data</span>
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
