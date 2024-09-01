import { TeamOutlined } from "@ant-design/icons";
import { List, Space, Spin } from "antd";
import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaRoad } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import RRButton from "../components/common/RRButton";
import { useGetAllCarsQuery } from "../redux/features/cars/carsApi";
import { TCar } from "../types/cars.type";

const Cars = () => {
  const location = useLocation();
  console.log(location);
  const { data: carData, isLoading: isCarsLoading } = useGetAllCarsQuery(
    location.search
  );

  if (isCarsLoading) {
    return <Spin fullscreen={true} />;
  }
  console.log(carData.data);

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div className="py-10 lg:px-32">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={carData.data}
        renderItem={(item: TCar) => (
          <List.Item
            key={item?._id}
            actions={[
              <IconText
                icon={TeamOutlined}
                text={`${item?.numberOfSeats} Seats`}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={FaCarSide}
                text={item?.carType}
                key="list-vertical-like-o"
              />,
              <IconText
                icon={FaRoad}
                text={item?.mileage?.toString()}
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={272} alt="logo" src={item?.images[0]?.url} />}
          >
            <List.Item.Meta
              //avatar={<Avatar src={item.avatar} />}
              title={<h2 className="text-2xl">{item?.name}</h2>}
              description={item?.description}
            />
            <p className="text-xl text-rrSkyBlue font-bold">
              $ {item?.pricePerHour} Per Hour
            </p>
            <RRButton styles="my-2 px-3 py-2">
              <Link to={`/cars/${item?._id}`}>View Details</Link>
            </RRButton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cars;
