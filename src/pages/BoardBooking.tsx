import { useBookings } from "../context/bookingsContext";
import MemberCard from "../components/MemberCard";
import BookingWarper from "../components/BookingWarper";
function BoardBooking() {
  const { unclaimedMembers } = useBookings();
  return (
    <div className="  p-5 h-full ">
      <div className="flex flex-row text-white">
        <div className="flex flex-col w-full text-center">
          <div className="grid grid-cols-4 gap-4">
            <BookingWarper
              count={unclaimedMembers ? unclaimedMembers.length : 0}
              title="Unclaimed"
            >
              {unclaimedMembers.map((booking, index) => (
                <MemberCard
                  key={index}
                  name={booking.name}
                  age={booking.age}
                  email={booking.email}
                  phone={booking.phone}
                />
              ))}
            </BookingWarper>
            {/* <div className="">
              <b>First Contact</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div> */}
            <BookingWarper count={0} title="First Contact">
              <div></div>
            </BookingWarper>
            {/* <div className="">
              <b>Preparing Work Offer</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div> */}
            <BookingWarper count={0} title="Preparing Work Offer">
              <div></div>
            </BookingWarper>
            {/* <div className="">
              <b>Send to Therapists</b>
              <div className="bg-blue-500 border border-white h-full mt-2"></div>
            </div> */}
            <BookingWarper count={0} title="Send to Therapists">
              <div></div>
            </BookingWarper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardBooking;
