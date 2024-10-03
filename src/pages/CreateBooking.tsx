import CreateBookingForm from "../components/CreateBookingForm";

function CreateBooking() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Create New Booking</h2>
      <CreateBookingForm />
    </div>
  );
}

export default CreateBooking;
