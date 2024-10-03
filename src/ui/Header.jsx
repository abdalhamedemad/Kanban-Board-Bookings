import Button from "./Button";
function Header() {
  return ( 
    <header
      className=" flex justify-between items-center p-4 bg-[#476c98] text-white"
    >
      <b>
      Kanban Board
      </b>
      <div>
      <Button type="primary" to="/create-booking" >Create Booking</Button>
      <Button type="primary" to="/board-booking" >View Bookings</Button>
      </div>
    </header>
   );
}

export default Header;