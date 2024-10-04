import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooking from "./pages/CreateBooking";
import BoardBooking from "./pages/BoardBooking";
import AppLayout from "./ui/AppLayout";
import { BookingsContextProvider } from "./context/bookingsContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BookingsContextProvider>
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#f9fafb",
            background: "#18212f",
          },
        }}
      />
    </BookingsContextProvider>
  );
}

export default App;
