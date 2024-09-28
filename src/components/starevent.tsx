import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { starEvents } from "../lib/constant.ts";
import CircleSpan from "./circlespan.tsx";

type StarEventProps = {
  date: Date;
  description: string;
};

const options : Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };

export const StarEvent = ({ date, description }: StarEventProps) => {
  return (
    <div className="star-events__item">
      <h3 className="container third-heading">
        <CircleSpan label={date.toLocaleDateString('fr-FR', options)}/>
      </h3>
      <p>{description}</p>
      <div className="container sss">
        <ArrowTopRightIcon width={25} height={25} />
      </div>
    </div>
  );
};

const StarEventSection = () => {
  return (
    <section className="star-events">
      {starEvents.map((event, i) => (
        <StarEvent key={i} {...event} />
      ))}
    </section>
  );
};

export default StarEventSection;
