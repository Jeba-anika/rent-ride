import { useGetFeaturedCarsQuery } from "../../redux/features/cars/carsApi";

const Featured = () => {
  const { data } = useGetFeaturedCarsQuery(undefined);
  console.log(data);
  return <div>sdhfhjsgdf</div>;
};

export default Featured;
