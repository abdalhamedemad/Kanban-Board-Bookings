import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooking from "./pages/CreateBooking";
import BoardBooking from "./pages/BoardBooking";
import AppLayout from "./ui/AppLayout";


function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="create-booking" element={<CreateBooking />} />
            <Route path="board-booking" element={<BoardBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
