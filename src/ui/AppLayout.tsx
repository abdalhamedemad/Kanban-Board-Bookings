import { Outlet } from "react-router-dom";
import Header from "./Header";
function AppLayout() {
  return (
    <div
      className="grid grid-row-3  h-screen 
    grid-rows-[auto_1fr_auto]  bg-[#d3e5ed] "
    >
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto h-full ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
