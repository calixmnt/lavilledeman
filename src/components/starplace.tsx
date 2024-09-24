type StarPlaceProps = {
  label: string;
  activities: string[];
  data: string;
};

const StarPlace = ({ label, activities, data }: StarPlaceProps) => {
  return (
    <div className="star-places__item">
      <h3 className="third-heading">{label}</h3>
      <ul className="star-place__activities">
        {activities.map((activity) => (
          <li>{activity}</li>
        ))}
        <p>{data}</p>
      </ul>
    </div>
  );
};

export default StarPlace;
