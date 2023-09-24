import { CDN_LOGO } from "../utils/constants";
const Card = ({ resto }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resto.info;
  return (
    <div className="card">
      <img
        src={CDN_LOGO + cloudinaryImageId}
        alt="fh"
        width={275}
        height={250}
      />
      <h2>{name}</h2>
      <h3>Rating:{avgRating}</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default Card;
