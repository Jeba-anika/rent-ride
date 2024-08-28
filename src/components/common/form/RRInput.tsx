/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
const RRInput = ({
  label,
  name,
  rules,
  isPassword,
  type = "string",
}: {
  label: string;
  name: string;
  rules: any;
  isPassword?: boolean;
  type?: "string" | "number" | "boolean" | "url" | "email";
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      {isPassword ? <Input.Password /> : <Input type={type} />}
    </Form.Item>
  );
};

export default RRInput;
