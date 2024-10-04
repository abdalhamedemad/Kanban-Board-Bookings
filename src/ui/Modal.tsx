function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 text-gray-950">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-[#476c98]  font-mono ">
            {title}
          </h2>
          <button
            onClick={onClose}
            className=" text-3xl text-gray-400 hover:text-gray-600"
          >
            &times;
          </button>
        </div>
        <div className="mb-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
