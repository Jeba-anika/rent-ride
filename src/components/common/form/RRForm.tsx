/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FormProps } from "antd";
import { Form } from "antd";
import { ReactNode } from "react";
import RRButton from "../RRButton";

const RRForm = ({
  form,
  name,
  children,
  submitBtnText,
  onFinish,
  isSubmitBtnDisabled = false,
  isBtnLoading = false,
}: {
  form: any;
  name: string;
  children: ReactNode;
  submitBtnText: string;
  onFinish: FormProps["onFinish"];
  isSubmitBtnDisabled?: boolean;
  isBtnLoading?: boolean;
}) => {
  return (
    <Form
      form={form}
      name={name}
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      scrollToFirstError
    >
      {children}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <RRButton
          styles="px-6 py-2 rounded mt-4"
          type="submit"
          isDisabled={isSubmitBtnDisabled}
          isLoading={isBtnLoading}
        >
          {submitBtnText}
        </RRButton>
      </Form.Item>
    </Form>
  );
};

export default RRForm;
