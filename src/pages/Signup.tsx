/* eslint-disable @typescript-eslint/no-explicit-any */
import type { CheckboxProps } from "antd";
import { Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthLogo from "../assets/signup.png";
import RRForm from "../components/common/form/RRForm";
import RRInput from "../components/common/form/RRInput";
import { useSignupMutation } from "../redux/features/auth/authApi";
const Signup = () => {
  const [form] = Form.useForm();
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [isTCAccepted, setIsTCAccepted] = useState(false);
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignup = async (values: any) => {
    console.log(values);
    setIsSignupLoading(true);
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(data);
    try {
      const result = await signup(data);
      console.log(result);
      if (result.data.statusCode === 201) {
        setIsSignupLoading(false);
        toast.success("Sign up successful!");
        navigate("/login");
      }
      if (result.error) {
        toast.error(result.error.error);
        setIsSignupLoading(false);
      }
    } catch (err: any) {
      setIsSignupLoading(false);
      toast.error(err.message);
    }
  };
  const onAcceptCheckboxChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setIsTCAccepted(e.target.checked);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-24 p-10 lg:p-28">
      <img src={AuthLogo} className=" rounded" />
      <div className=" w-full">
        <h2 className="text-center mb-2 text-lg text-rrSkyBlue font-bold">
          Sign Up
        </h2>

        <RRForm
          form={form}
          name="signup"
          onFinish={handleSignup}
          submitBtnText="Signup"
          isSubmitBtnDisabled={!isTCAccepted}
          isBtnLoading={isSignupLoading}
        >
          <RRInput
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          />

          <RRInput
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            type="email"
          />
          <RRInput
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            isPassword={true}
          />
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Checkbox onChange={onAcceptCheckboxChange}>
            I accept the{" "}
            <Link className="underline" to="/terms-conditions">
              Terms & Conditions
            </Link>
          </Checkbox>
        </RRForm>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <Form
name="Signup"
layout="vertical"
initialValues={{ remember: true }}
onFinish={handleSignup}
>
<RRInput
  label="Name"
  name="name"
  rules={[{ required: true, message: "Please input your name!" }]}
/>

<RRInput
  label="Email"
  name="email"
  rules={[{ required: true, message: "Please input your email!" }]}
/>
<RRInput
  label="Password"
  name="password"
  rules={[{ required: true, message: "Please input your password!" }]}
  isPassword={true}
/>
<RRInput
  label="Confirm Password"
  name="confirm-password"
  rules={[
    { required: true, message: "Please confirm your password!" },
  ]}
  isPassword={true}
/>

<Form.Item
  name="remember"
  valuePropName="checked"
  // wrapperCol={{ offset: 8, span: 16 }}
>
  <Checkbox>
    I accept the{" "}
    <Link className="underline" to="/terms-conditions">
      Terms & Conditions
    </Link>
  </Checkbox>
</Form.Item>

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <RRButton styles="px-6 py-2 rounded" type="submit">
    Signup
  </RRButton>
  {/* <Button type="primary" htmlType="submit">
    Submit
  </Button> */
}
// </Form.Item>
// </Form> */}
