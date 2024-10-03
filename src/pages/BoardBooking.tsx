import { useBookings } from "../context/bookingsContext";
import MemberCard from "../components/MemberCard";
import BookingWarper from "../components/BookingWarper";
function BoardBooking() {
  const {
    unclaimedMembers,
    firstContactMembers,
    preparingWorkOffer,
    sentToTherapists,
  } = useBookings();
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
                  title={booking.title}
                  status={booking.status}
                  id={booking.id}
                />
              ))}
            </BookingWarper>
            <BookingWarper
              count={firstContactMembers ? firstContactMembers.length : 0}
              title="First Contact"
            >
              {firstContactMembers.map((booking, index) => (
                <MemberCard
                  key={index}
                  name={booking.name}
                  age={booking.age}
                  email={booking.email}
                  phone={booking.phone}
                  title={booking.title}
                  status={booking.status}
                />
              ))}
            </BookingWarper>
            <BookingWarper
              count={preparingWorkOffer ? preparingWorkOffer.length : 0}
              title="Preparing Work Offer"
            >
              {preparingWorkOffer.map((booking, index) => (
                <MemberCard
                  key={index}
                  name={booking.name}
                  age={booking.age}
                  email={booking.email}
                  phone={booking.phone}
                  title={booking.title}
                  status={booking.status}
                />
              ))}
            </BookingWarper>
            <BookingWarper
              count={sentToTherapists ? sentToTherapists.length : 0}
              title="Send to Therapists"
            >
              {sentToTherapists.map((booking, index) => (
                <MemberCard
                  key={index}
                  name={booking.name}
                  age={booking.age}
                  email={booking.email}
                  phone={booking.phone}
                  title={booking.title}
                  status={booking.status}
                />
              ))}
            </BookingWarper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardBooking;
