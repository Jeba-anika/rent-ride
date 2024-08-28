import { Spin } from "antd";
import React, { ReactNode } from "react";

const RRButton = ({
  children,
  styles,
  type = undefined,
  onClick,
  isLoading = false,
  isDisabled = false,
}: {
  children: ReactNode;
  styles: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLElement>;
  isLoading?: boolean;
  isDisabled?: boolean;
}) => {
  return (
    <button
      disabled={isLoading || isDisabled}
      onClick={onClick}
      className={`bg-rrSkyBlue border hover:border-rrSkyBlue hover:bg-white rounded disabled:opacity-60 disabled:hover:bg-rrSkyBlue ${styles}`}
      type={type}
    >
      <div className="flex justify-center items-center gap-3">
        {isLoading && <Spin className="" />}
        {children}
      </div>
    </button>
  );
};

export default RRButton;
