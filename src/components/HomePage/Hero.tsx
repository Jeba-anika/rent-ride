import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
      <ParallaxBannerLayer image={Banner} speed={-30} />
      <ParallaxBannerLayer>
        {/* <h1 className="flex justify-center items-center text-white mt-11">
          My Headline
        </h1> */}
        <div></div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Hero;
