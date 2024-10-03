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
    const id = new Date().toISOString();
    newMember.id = id;
    if (members === null) setMembers(JSON.stringify([newMember]));
    else {
      console.log("Members already exist", [...JSON.parse(members), newMember]);
      setMembers(JSON.stringify([...JSON.parse(members), newMember]));
    }
    console.log("unclaimedMembers", unclaimedMembers);
  };

  const updateBooking = (id, updatedMember) => {
    console.log("updatedMember", updatedMember);
    updatedMember.id = id;
    const updatedMembers = JSON.parse(members).map((member) => {
      if (member.id === id) {
        console.log("member.id", member.id);
        return updatedMember;
      }
      return member;
    });
    console.log("updatedMembers", updatedMembers);
    setMembers(JSON.stringify(updatedMembers));
  };

  const deleteBooking = (id) => {
    const updatedMembers = JSON.parse(members).filter(
      (member) => member.id !== id
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
