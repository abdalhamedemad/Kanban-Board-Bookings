import Modal from "./Modal";
import { useState } from "react";

function DeleteMessage({ confirmDelete, isModalOpen, setModalOpen }) {
  // const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Modal isOpen={isModalOpen} onClose={() => {}} title="Delete Booking">
      <p>Are you sure you want to delete this booking?</p>
      <div className="flex gap-2 mt-5">
        <button
          onClick={confirmDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default DeleteMessage;
