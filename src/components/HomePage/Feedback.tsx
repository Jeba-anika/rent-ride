import { Carousel, Rate } from "antd";
import feedback from "../../assets/feedback.png";

const Feedback = () => {
  const customerTestimonials = [
    {
      name: "Jane Doe",
      rating: 5,
      feedback:
        "Absolutely fantastic service! The booking process was seamless, and I was able to find the perfect car for my family road trip. The vehicle was in great condition and made our trip comfortable and worry-free. I will definitely use this service again!",
    },
    {
      name: "John Smith",
      rating: 5,
      feedback:
        "I needed a rental car last minute, and this company was a lifesaver. The customer support was incredibly responsive and helped me secure a vehicle in no time. Great prices and excellent service. Highly recommended!",
    },
    {
      name: "Emily Johnson",
      rating: 5,
      feedback:
        "I've rented cars from many companies, but this one stands out for its wide selection and fantastic customer service. The car was clean, well-maintained, and exactly as described. The 24/7 support was a huge plus for my late-night pickup. Will rent again!",
    },
    {
      name: "Michael Brown",
      rating: 4,
      feedback:
        "I was impressed with the range of eco-friendly vehicles available. I rented an electric car for a weekend getaway, and it was a smooth and enjoyable drive. It's great to see a company committed to sustainability. Thumbs up!",
    },
    {
      name: "Sarah Lee",
      rating: 5,
      feedback:
        "Reliable, efficient, and affordable! I rented a car for a business trip, and the whole experience was excellent from start to finish. The online booking system is user-friendly, and the vehicle exceeded my expectations. Highly recommended for anyone looking for hassle-free car rentals.",
    },
    {
      name: "David Wilson",
      rating: 5,
      feedback:
        "I had a great experience with this car rental service. The pickup and drop-off process was quick and easy, and the staff were friendly and professional. The car was spotless and drove like a dream. Will definitely use them again for my next trip!",
    },
    {
      name: "Laura Martinez",
      rating: 5,
      feedback:
        "Great prices and even better service! The team went out of their way to accommodate my schedule, and the car I rented was in perfect condition. I highly recommend this company for anyone looking for a reliable car rental service.",
    },
  ];

  const contentStyle: React.CSSProperties = {
    color: "#fff",
    background: "#8AB2FF",
  };
  return (
    <div className="px-20">
      <h2 className="my-10 text-3xl text-center font-bold">
        Customer Feedbacks{" "}
      </h2>
      <div className="flex gap-10 items-center">
        <div className="w-1/2 flex justify-center items-center">
          <img src={feedback} />
        </div>
        <div className="w-1/2 ">
          <Carousel arrows infinite centerMode focusOnSelect className="">
            {customerTestimonials.map((feedback) => (
              <div>
                <div
                  style={contentStyle}
                  className="p-10 mx-5 my-auto h-[400px] rounded-xl"
                >
                  <p className="text-2xl mb-4 font-bold">{feedback.name}</p>
                  <p>
                    <Rate disabled defaultValue={feedback.rating} allowHalf />
                  </p>
                  <p className="text-lg"> {feedback.feedback}</p>
                </div>
              </div>
            ))}{" "}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
