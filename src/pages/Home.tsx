import CreateBookingForm from "../components/CreateBookingForm";
import Modal from "../ui/Modal";
import { useState } from "react";
function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div>
      Home
      <button
        onClick={openModal}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Open Modal
      </button>
      <Modal isOpen={true} onClose={() => {}} title="Delete Booking">
        <p>Are you sure you want to delete this booking?</p>
        <div className="flex gap-2 mt-5">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
