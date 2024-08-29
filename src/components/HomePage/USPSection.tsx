import { BiSupport } from "react-icons/bi";
import { GrSelect } from "react-icons/gr";
import { ImPriceTag } from "react-icons/im";

const USPSection = () => {
  const items = [
    {
      title: "Best Prices Guaranteed",
      icon: (
        <ImPriceTag className="size-24 border bg-rrSkyBlue p-2 rounded-full text-white" />
      ),
      description:
        "At our car rental service, we believe in providing the best value for your money. We offer competitive pricing with no hidden fees, ensuring that you always get the most affordable rates. ",
    },
    {
      title: "Wide Selection of Vehicles",
      icon: (
        <GrSelect className="size-24 border bg-rrSkyBlue p-2 rounded-full text-white" />
      ),
      description:
        "We understand that every journey is unique, and so are your vehicle needs. That's why we offer a diverse fleet of vehicles to choose from. ",
    },
    {
      title: "24/7 Customer Support",
      icon: (
        <BiSupport className="size-24 border bg-rrSkyBlue p-2 rounded-full text-white" />
      ),
      description:
        "Your convenience and satisfaction are our top priorities. That's why we provide round-the-clock customer support to assist you with any queries or issues you may have. ",
    },
  ];
  return (
    <div className="px-20 mt-20">
      <h2 className="my-10 text-3xl text-center font-bold">Why Choose Us? </h2>
      <div className="flex items-center gap-20">
        {items.map((item) => (
          <div className="w-1/3  text-center">
            <div>
              <div className="w-full flex justify-center items-center ">
                {item.icon}
              </div>
              <p className=" mt-4 text-xl font-bold">{item.title}</p>
              <p className="text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default USPSection;
