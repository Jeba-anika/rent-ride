import { Avatar } from "antd";
import Banner from "../assets/about-us-banner.jpg";
import fleetImg from "../assets/fleet.png";
import Logo from "../assets/logo.png";
import ValueImg from "../assets/route.png";
const About = () => {
  return (
    <div>
      <div
        className="h-[400px] text-center text-3xl pt-4 font-bold"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        Welcome to Rent Ride - Your Trusted Car Rental Partner!
      </div>

      {/* ------------------Company History--------------------------- */}
      <div className="flex px-24 justify-center items-center mt-10 gap-10">
        <img src={Logo} className="size-40 " />
        <div>
          <h4 className="text-2xl mb-3 font-bold">Company History:</h4>
          <p className="text-justify">
            Founded in 2018,{" "}
            <span className="font-bold text-rrSkyBlue ">Rent Ride</span> began
            with a simple yet powerful mission: to make car rental easy,
            affordable, and accessible for everyone. Our journey started when
            our founder, John Doe, recognized a gap in the market for a reliable
            car rental service that truly understands customer needs. With a
            vision to deliver quality vehicles, top-notch customer service, and
            transparent pricing, Rent Ride has grown from a small startup to a
            trusted name in the car rental industry. Over the years, we have
            expanded our fleet, innovated our processes, and built a strong
            network, all while staying true to our core values of trust,
            integrity, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* -------------------------Meet Our team------------------------- */}
      <div className="mt-2014 px-24">
        <h4 className="text-2xl mb-10  text-center font-bold ">
          Meet Our team
        </h4>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex items-center text-justify gap-3">
            <Avatar
              className="size-40 "
              src="https://images.squarespace-cdn.com/content/656f4e4dababbd7c042c4946/1706750781148-ZC9BZUC4HG8ETZ9AEU63/how-to-stop-being-a-people-pleaser-1_1.jpg?content-type=image%2Fjpeg"
            />
            <div>
              <p className="text-2xl">John Doe</p>
              <p>CEO & Founder</p>
            </div>
          </div>
          <p className="text-center w-1/2">
            With over 15 years of experience in the automotive and rental
            industries, John leads our company with a clear vision and a
            commitment to excellence.He is dedicated to building a company that
            not only meets but exceeds customer expectations.
          </p>
          <div className="flex items-center text-justify gap-10">
            <Avatar
              className="size-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT800Mo_wo3jVvDQzruZxDx8HnszwqkUe2MAg&s"
            />
            <div>
              <p className="text-2xl">Amy Farrah Fowler</p>
              <p>Head of Operations</p>
            </div>
          </div>

          <div className="flex items-center text- gap-10">
            <Avatar
              className="size-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu-k_hZT0lFOLgdNDAFXCMcRJjhp8vBZqsw&s"
            />
            <div>
              <p className="text-2xl">Penny </p>
              <p>Customer Relations Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------Our Fleet-------------------------------- */}
      <div className="mt-20 px-24">
        <h4 className="text-2xl mb-3 font-bold text-center">Our Fleet</h4>
        <div className="flex justify-center items-center gap-14 text-justify ">
          <div className="w-1/2">
            At Rent Ride, we pride ourselves on offering a diverse fleet of
            vehicles to suit every need and preference:
            <p className="mt-3">
              {" "}
              <span className="font-bold">Economy Cars:</span> Perfect for
              budget-conscious travelers looking for reliability and fuel
              efficiency.
            </p>
            <p className="mt-3">
              {" "}
              <span className="font-bold">Luxury Vehicles:</span> Experience
              comfort and style with our selection of high-end cars, ideal for
              special occasions or business trips.
            </p>
            <p className="mt-3">
              <span className="font-bold">SUVs:</span> Spacious and powerful,
              our SUVs are great for family road trips or adventures that
              require a bit more room.
            </p>{" "}
            <p className="my-3">
              {" "}
              <span className="font-bold">Electric Cars:</span> For the
              eco-conscious driver, our electric cars offer a sustainable way to
              travel without compromising on performance.
            </p>
            Whether you're looking for a compact car for city driving or a
            luxury sedan for a weekend getaway, we have the perfect vehicle to
            match your needs.
          </div>
          <img src={fleetImg} className="rounded-xl" />
        </div>
      </div>

      {/* -----------------------Values-------------------------------- */}
      <div className="mt-20 px-24">
        <h4 className="text-2xl mb-10 font-bold text-center">
          Values and Commitments
        </h4>
        <div className="flex justify-center items-center gap-14 text-justify ">
          <img src={ValueImg} className="rounded-xl" />
          <div className="w-1/2">
            At Rent Ride, we are committed to delivering exceptional service
            while maintaining our core values:
            <p className="mt-3">
              <span className="font-bold">Customer-Centric Service:</span> We
              put our customers first, ensuring that every rental is a positive
              and memorable experience.
            </p>
            <p className="mt-3">
              {" "}
              <span className="font-bold">Sustainability:</span> We believe in
              sustainable practices and are committed to reducing our carbon
              footprint by offering electric and hybrid vehicles.
            </p>
            <p className="mt-3">
              <span className="font-bold">Integrity:</span> Honesty and
              transparency are at the heart of our business. We provide clear
              pricing with no hidden fees and maintain our vehicles to the
              highest standards.
            </p>{" "}
            <p className="mt-3">
              {" "}
              <span className="font-bold">Community Engagement:</span> We are
              proud to support local communities and participate in initiatives
              that promote safety, sustainability, and social responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* -----------------------Contact Info-------------------------------- */}
      <div className="mt-20 px-24">
        <h4 className="text-2xl mb-6 font-bold text-center">Contact Info</h4>
        <div className="text-center ">
          <p>We'd love to hear from you!</p>
          <p>For any inquiries or assistance, please reach out to us:</p>
          <p>Phone: 89997516</p>
          <p> Email: rent.ride@email.com</p>
          <p> Address: Uganda</p>
        </div>
      </div>
    </div>
  );
};

export default About;
