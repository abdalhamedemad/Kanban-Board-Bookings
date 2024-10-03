import { useState, createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const BookingsContext = createContext({
  unclaimedMembers: [],
  firstContactMembers: [],
  preparingWorkOffer: [],
  sentToTherapists: [],
});

const BookingsContextProvider = (props) => {
  const [members, setMembers] = useLocalStorage("members", null);

  const [unclaimedMembers, setUnclaimedMembers] = useState(() => {
    if (members !== null) {
      return JSON.parse(members).filter(
        (member) => member.status === "unclaimed"
      );
    }
    return [];
  });

  const [firstContactMembers, setFirstContactMembers] = useState(() => {
    if (members !== null) {
      return JSON.parse(members).filter(
        (member) => member.status === "firstContact"
      );
    }
    return [];
  });

  const [preparingWorkOffer, setPreparingWorkOffer] = useState(() => {
    if (members !== null) {
      return JSON.parse(members).filter(
        (member) => member.status === "preparingWorkOffer"
      );
    }
    return [];
  });

  const [sentToTherapists, setSentToTherapists] = useState(() => {
    if (members !== null) {
      return JSON.parse(members).filter(
        (member) => member.status === "sentToTherapists"
      );
    }
    return [];
  });
  useEffect(() => {
    if (members !== null) {
      setUnclaimedMembers(
        JSON.parse(members).filter((member) => member.status === "unclaimed")
      );

      setFirstContactMembers(
        JSON.parse(members).filter((member) => member.status === "firstContact")
      );

      setPreparingWorkOffer(
        JSON.parse(members).filter(
          (member) => member.status === "preparingWorkOffer"
        )
      );

      setSentToTherapists(
        JSON.parse(members).filter(
          (member) => member.status === "sentToTherapists"
        )
      );
    }
  }, [members]);

  const createNewBooking = (newMember) => {
    if (members === null) setMembers(JSON.stringify([newMember]));
    else {
      console.log("Members already exist", [...JSON.parse(members), newMember]);
      setMembers(JSON.stringify([...JSON.parse(members), newMember]));
    }
    console.log("unclaimedMembers", unclaimedMembers);
  };

  const value = {
    unclaimedMembers,
    firstContactMembers,
    preparingWorkOffer,
    sentToTherapists,
    createNewBooking,
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
