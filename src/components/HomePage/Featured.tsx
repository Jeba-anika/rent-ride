import { Carousel, Spin } from "antd";
import { FaRoad } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetFeaturedCarsQuery } from "../../redux/features/cars/carsApi";
import { TCar } from "../../types/cars.type";

const Featured = () => {
  const { data, isLoading } = useGetFeaturedCarsQuery(undefined);
  console.log(data);

  const contentStyle: React.CSSProperties = {
    color: "#fff",
    background: "#8AB2FF",
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <Spin />
      </div>
    );
  }
  return (
    <div className="mt-20 px-10">
      <h2 className="my-8 text-2xl text-center">Featured </h2>
      <Carousel arrows infinite centerMode focusOnSelect>
        {data.data.map((car: TCar) => (
          <div>
            <div
              style={contentStyle}
              className="grid md:grid-cols-4 lg:h-[200px] mx-4 p-4 rounded-xl gap-3"
            >
              <div className="flex justify-center items-center">
                <img src={car.images[0].url} className="size-36 rounded"></img>
              </div>
              <div className="col-span-2 text-start my-5 ">
                <p className="text-2xl">{car.name}</p>
                <p className="mt-2">{car.description}</p>
                <p>
                  <span className="font-bold">Car Type: </span> {car.carType}
                </p>
                <div className="flex gap-5 ">
                  <p className="flex mt-2">
                    <MdOutlineAirlineSeatReclineNormal className="size-6" />{" "}
                    {car.numberOfSeats}
                  </p>
                  <p className="flex mt-2">
                    <FaRoad className="size-6" /> {car.mileage}
                  </p>
                </div>
              </div>
              <div className="flex items-end my-5 ">
                <div>
                  <p>
                    <span className="text-5xl">$ {car.pricePerHour}</span>{" "}
                    <span>per hour</span>
                  </p>
                  <Link className="" to={`/cars/${car._id}`}>
                    <button className="px-4 py-2 border border-rrWineRed mt-5 rounded-xl hover:bg-rrWineRed">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
