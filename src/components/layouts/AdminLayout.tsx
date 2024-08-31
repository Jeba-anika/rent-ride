import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  if (user?.role === "admin") {
    return <div>{children}</div>;
  }
  return (
    <div className="text-center text-rrMaroon text-2xl">
      You are not authorized!
    </div>
  );
};

export default AdminLayout;
