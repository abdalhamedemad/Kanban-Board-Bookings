import { useBookings } from "../context/bookingsContext";
import MemberCard from "../components/MemberCard";
import BookingWarper from "../components/BookingWarper";
interface BookingMember {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  status: string;
  title: string;
}

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
        <div className="flex justify-center items-center w-full text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
            <BookingWarper
              count={unclaimedMembers ? unclaimedMembers.length : 0}
              title="Unclaimed"
            >
              {unclaimedMembers.map((booking: BookingMember, index: string) => (
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
              {firstContactMembers.map(
                (booking: BookingMember, index: string) => (
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
                )
              )}
            </BookingWarper>
            <BookingWarper
              count={preparingWorkOffer ? preparingWorkOffer.length : 0}
              title="Preparing Work Offer"
            >
              {preparingWorkOffer.map(
                (booking: BookingMember, index: string) => (
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
                )
              )}
            </BookingWarper>
            <BookingWarper
              count={sentToTherapists ? sentToTherapists.length : 0}
              title="Send to Therapists"
            >
              {sentToTherapists.map((booking: BookingMember, index: string) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardBooking;
