import { useState, createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
interface BookingMember {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  status: string;
  title: string;
}
const BookingsContext = createContext({
  unclaimedMembers: [],
  firstContactMembers: [],
  preparingWorkOffer: [],
  sentToTherapists: [],
});

const BookingsContextProvider = (props) => {
  const [members, setMembers] = useLocalStorage("members", null);

  const [unclaimedMembers, setUnclaimedMembers] = useState<BookingMember[]>([]);

  const [firstContactMembers, setFirstContactMembers] = useState<
    BookingMember[]
  >([]);

  const [preparingWorkOffer, setPreparingWorkOffer] = useState<BookingMember[]>(
    []
  );

  const [sentToTherapists, setSentToTherapists] = useState<BookingMember[]>([]);

  useEffect(() => {
    if (members !== null) {
      setUnclaimedMembers(
        JSON.parse(members).filter(
          (member: BookingMember) => member.status === "unclaimed"
        )
      );

      setFirstContactMembers(
        JSON.parse(members).filter(
          (member: BookingMember) => member.status === "firstContact"
        )
      );

      setPreparingWorkOffer(
        JSON.parse(members).filter(
          (member: BookingMember) => member.status === "preparingWorkOffer"
        )
      );

      setSentToTherapists(
        JSON.parse(members).filter(
          (member: BookingMember) => member.status === "sentToTherapists"
        )
      );
    }
  }, [members]);

  const createNewBooking = (newMember: BookingMember) => {
    const id = new Date().toISOString();
    newMember.id = id;
    if (members === null) setMembers(JSON.stringify([newMember]));
    else {
      console.log("Members already exist", [...JSON.parse(members), newMember]);
      setMembers(JSON.stringify([...JSON.parse(members), newMember]));
    }
    console.log("unclaimedMembers", unclaimedMembers);
  };

  const updateBooking = (id: string, updatedMember: BookingMember) => {
    console.log("updatedMember", updatedMember);
    updatedMember.id = id;
    const updatedMembers = JSON.parse(members).map((member: BookingMember) => {
      if (member.id === id) {
        console.log("member.id", member.id);
        return updatedMember;
      }
      return member;
    });
    console.log("updatedMembers", updatedMembers);
    setMembers(JSON.stringify(updatedMembers));
  };

  const deleteBooking = (id: string) => {
    const updatedMembers = JSON.parse(members).filter(
      (member: BookingMember) => member.id !== id
    );
    setMembers(JSON.stringify(updatedMembers));
  };

  const value = {
    unclaimedMembers,
    firstContactMembers,
    preparingWorkOffer,
    sentToTherapists,
    createNewBooking,
    updateBooking,
    deleteBooking,
  };

  return (
    <BookingsContext.Provider value={value}>
      {props.children}
    </BookingsContext.Provider>
  );
};
const useBookings = () => {
  return useContext(BookingsContext);
};
export { useBookings, BookingsContextProvider };
