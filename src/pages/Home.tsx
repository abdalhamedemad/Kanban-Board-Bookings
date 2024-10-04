import Button from "../ui/Button";

function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 text-[#476c98] mt-5 font-mono">
      <div className="flex flex-col items-center justify-center gap-16">
        <h1
          className="
      text-4xl font-semibold text-center
      "
        >
          Welcome to Kanban Board Booking
        </h1>
        <div>
          <div className="flex items-center justify-start gap-4">
            <Button type="primary" to="/create-booking">
              Create Booking
            </Button>
            <Button type="primary" to="/board-booking">
              View Bookings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
