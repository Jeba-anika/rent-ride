import { DatePicker, DatePickerProps, Form, Input } from "antd";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Banner from "../../assets/banner.jpg";
import RRButton from "../common/RRButton";

const Hero = () => {
  const [form] = Form.useForm();
  const handleCarSearch = (values) => {
    console.log(values);
  };
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
      <ParallaxBannerLayer image={Banner} speed={-30} />
      <ParallaxBannerLayer>
        {/* <h1 className="flex justify-center items-center text-white mt-11">
          My Headline
        </h1> */}
        {/* <RRForm
          form={form}
          name="signup"
          onFinish={handleCarSearch}
          submitBtnText="Sign In"
        >
          <div className="flex  justify-center items-center gap-3 mt-11">
            <Form.Item name="email">
              <input className="px-5 py-6 rounded" />
            </Form.Item>
            <Form.Item name="email">
              <input className="px-5 py-6 rounded" />
            </Form.Item>
          </div>
        </RRForm> */}

        <div className="flex justify-center items-center h-full w-full">
          <Form
            form={form}
            name="Car Search"
            initialValues={{ remember: true }}
            onFinish={handleCarSearch}
            scrollToFirstError
            className="w-fit border border-rrSkyBlue p-4 rounded-xl bg-slate-300"
          >
            <h1 className="text-2xl text-center mb-3 font-bold text-rrWineRed">
              Drive Your Way – Explore More, Pay Less!
            </h1>
            <div className="flex  justify-center items-center    gap-3 ">
              <Form.Item name="location">
                <Input
                  placeholder="Type Location"
                  className="px-5 py-6 rounded border-rrSkyBlue"
                />
              </Form.Item>
              <Form.Item name="date">
                <DatePicker
                  onChange={onChange}
                  className="px-5 py-6 rounded border-rrSkyBlue"
                />
              </Form.Item>
              <Form.Item className="border-none">
                <RRButton
                  styles="px-8 py-4 rounded text-xl "
                  type="submit"
                  isDisabled={false}
                  isLoading={false}
                >
                  Book Now
                </RRButton>
              </Form.Item>
            </div>
            {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <RRButton
              styles="px-6 py-2 rounded mt-4"
              type="submit"
              isDisabled={isSubmitBtnDisabled}
              isLoading={isBtnLoading}
            >
              {submitBtnText}
            </RRButton>
          </Form.Item> */}
          </Form>
        </div>
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Hero;
