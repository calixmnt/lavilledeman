import { useRef } from "react";

type DetailsCardProps = {
  isExpanded: boolean;
  detailedInfo?: string;
  imageSrc?: string;
  label: string;
};

const DetailsCard = ({
  isExpanded,
  detailedInfo,
  imageSrc,
  label,
}: DetailsCardProps) => {
    const collapseRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={collapseRef}
      className={`details-card ${isExpanded && "expanded"}`}
    >
      {isExpanded && (
        <>
          {/* <h4 className="details-card__label">{label}</h4> */}
          {detailedInfo ? (
            <div className="details-card__info">
                {detailedInfo}
            </div>
          ) : (
            <p className="details-card__info">
              Pas d'informations supplémentaires
            </p>
          )}
          {imageSrc && (
            <img
              className="details-card__image"
              src={imageSrc}
              alt={`${label} Image`}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DetailsCard;
