import { useState } from "react";
import { starPlacesData } from "../lib/constant.ts";
import CircleSpan from "./circlespan.tsx";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import DetailsCard from "./detailscard.tsx";
import { StarPlaceProps } from "../lib/types.ts";

const StarPlace = ({
  label,
  activities,
  duration,
  difficulty,
  highlights,
  bestTimeToVisit,
  detailedInfo,
  imageSrc,
  isExpanded,
  onToggle,
}: StarPlaceProps) => {
  return (
    <div className="star-places__item">
      <h3 className="container third-heading">{label}</h3>
      <ul className="star-place__activities">
        {activities.map((activity, index) => (
          <CircleSpan label={activity} key={index} />
        ))}
      </ul>

      <div className="infos-container">
        {duration && (
          <div className="info">
            <strong>Durée :</strong> {duration}
          </div>
        )}
        {difficulty && (
          <div className="info">
            <strong>Difficulté :</strong> {difficulty}
          </div>
        )}
        {highlights && (
          <div className="info">
            <strong>Points d'intérêt :</strong> {highlights}
          </div>
        )}
        {bestTimeToVisit && (
          <div className="info">
            <strong>Meilleure période :</strong> {bestTimeToVisit}
          </div>
        )}
      </div>

      <button className="collapse-toggle" onClick={onToggle}>
        {isExpanded ? (
          <MinusIcon width={20} height={20} />
        ) : (
          <PlusIcon width={20} height={20} />
        )}
      </button>

      <DetailsCard
        isExpanded={isExpanded}
        detailedInfo={detailedInfo}
        imageSrc={imageSrc}
        label={label}
      />
    </div>
  );
};

const StarPlacesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    e.currentTarget.blur();
  };

  return (
    <section className="star-places">
      <section className="title">
        <span className="title--activities special-heading">activités</span>
        <span className="title--data special-heading">Informations</span>
      </section>
      {starPlacesData.map((place, i) => (
        <StarPlace
          key={i}
          {...place}
          isExpanded={expandedIndex === i}
          onToggle={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleToggle(e, i)
          }
        />
      ))}
    </section>
  );
};

export default StarPlacesSection;
