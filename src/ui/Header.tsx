import { Link } from "react-router-dom";
import Button from "./Button";
function Header() {
  return (
    <header className=" flex justify-between items-center p-4 bg-[#476c98] text-white">
      <Link to="/" className="text-2xl font-bold">
        Kanban Board
      </Link>
      <div className="flex items-center justify-start gap-2">
        <Button type="primary" to="/create-booking">
          Create Booking
        </Button>
        <Button type="primary" to="/board-booking">
          View Bookings
        </Button>
      </div>
    </header>
  );
}

export default Header;
