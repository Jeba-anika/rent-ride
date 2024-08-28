import { Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AuthLogo from "../assets/signup.png";
import RRForm from "../components/common/form/RRForm";
import RRInput from "../components/common/form/RRInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
const Login = () => {
  const [form] = Form.useForm();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignup = async (values: any) => {
    console.log(values);
    setIsLoginLoading(true);

    try {
      const result = await login(values);
      console.log(result);
      if (result.data.statusCode === 200) {
        setIsLoginLoading(false);
        toast.success("Sign in successful!");
        navigate("/");
        const user = result.data.data;
        dispatch(setUser({ user, token: result.data.accessToken }));
      }
      if (result.error) {
        toast.error(result.error.error);
        setIsLoginLoading(false);
      }
    } catch (err: any) {
      setIsLoginLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-24 p-10 lg:p-28">
      <img src={AuthLogo} className=" rounded" />
      <div className=" w-full">
        <h2 className="text-center mb-2 text-lg text-rrSkyBlue font-bold">
          Sign In
        </h2>

        <RRForm
          form={form}
          name="signup"
          onFinish={handleSignup}
          submitBtnText="Sign In"
          isBtnLoading={isLoginLoading}
        >
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
        </RRForm>
      </div>
    </div>
  );
};

export default Login;
