import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
