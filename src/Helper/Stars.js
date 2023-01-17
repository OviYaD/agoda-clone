// getStars(3.5).map((star)=><React.fragment key>{star}</>)
import Star from "../Components/Star/Star";

export const getStars = (rating) => {
    if (rating < 0) return;
    const remainder = parseFloat(rating - Math.floor(rating)).toFixed(1);
    rating = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<Star />);
    }
    if (stars.length < 5) stars.push(<Star fill={remainder * 100} />);
        return stars;
  };