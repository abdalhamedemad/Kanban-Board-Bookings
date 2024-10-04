import Modal from "../ui/Modal";
import CreateBookingForm from "./CreateBookingForm";
import { useState } from "react";

function MemberCard({ name, age, email, phone, status, title, id }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div
        className="bg-slate-50 flex flex-col p-4 text-gray-950 items-start rounded-md mb-3 cursor-pointer hover:bg-slate-200 transform transition duration-300 hover:scale-105"
        onClick={openModal}
      >
        <p className="flex justify-between items-center w-full mb-2 ">
          <span className="font-bold truncate max-w-[12rem]">{name}</span>
          <span className="text-sm text-gray-600">{age} yo</span>
        </p>
        <p className="text-gray-600 mb-2  truncate max-w-[12rem]">{email}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit Booking">
        <CreateBookingForm
          bookingToEdit={{
            name,
            age,
            email,
            phone,
            status,
            title,
            id,
          }}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default MemberCard;
