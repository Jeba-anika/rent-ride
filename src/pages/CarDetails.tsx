import { Image, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../redux/features/cars/carsApi";
import { TCarImg } from "../types/cars.type";

const CarDetails = () => {
  const { carId } = useParams();
  const {
    data: carData,
    isError,
    isLoading: isCarLoading,
  } = useGetSingleCarQuery(carId);
  const [selectedCarImg, setSelectedCarImg] = useState(
    carData?.data?.images[0]
  );
  console.log(carData);
  useEffect(() => {
    setSelectedCarImg(carData?.data?.images[0]);
  }, [carData]);

  if (isError) {
    return <div>Some Error occurred!</div>;
  }
  if (isCarLoading) {
    return <Spin fullscreen={true} />;
  }

  return (
    <div className="px-10">
      <div className="flex justify-center">
        <Image src={selectedCarImg?.url} />
      </div>
      <div className="flex justify-center items-center gap-4">
        {carData?.data?.images.map((carImg: TCarImg) => (
          <button onClick={() => setSelectedCarImg(carImg)}>
            <img
              className="w-[100px] h-[100px] hover:opacity-30 "
              src={carImg.url}
              alt=""
            />
          </button>
        ))}
      </div>
      <div className="border border-rrSkyBlue p-10 rounded-lg mt-4">
        <h3 className="text-4xl mb-2">{carData.data.name}</h3>
        <p>
          <span className="text-2xl text-rrSkyBlue">
            $ {carData.data.pricePerHour}
          </span>{" "}
          per hour
        </p>
      </div>
    </div>
  );
};

export default CarDetails;
