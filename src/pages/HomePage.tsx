import Featured from "../components/HomePage/Featured";
import Feedback from "../components/HomePage/Feedback";
import Hero from "../components/HomePage/Hero";
import USPSection from "../components/HomePage/USPSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <USPSection />
      <Feedback />
    </div>
  );
};

export default HomePage;
