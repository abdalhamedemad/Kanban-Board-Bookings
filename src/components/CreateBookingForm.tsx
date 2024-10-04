import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBookings } from "../context/bookingsContext.js";

import toast from "react-hot-toast";

import Button from "../ui/Button.js";
import DeleteMessage from "../ui/DeleteMessage.js";

interface CreateBookingFormProps {
  bookingToEdit?: {
    name: string;
    age: number;
    email: string;
    phone: string;
    status: string;
    title: string;
    id: string;
  };
  closeModal: () => void;
}

function CreateBookingForm({
  bookingToEdit = {},
  closeModal = () => {},
}: CreateBookingFormProps) {
  const isEditing = Object.keys(bookingToEdit).length > 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditing ? bookingToEdit : {},
  });
  const bookings = useBookings();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const confirmDelete = (e: any) => {
    e.preventDefault();
    bookings.deleteBooking(bookingToEdit.id);
    toast.success("Booking deleted successfully!");
    closeModal();
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    setShowDeleteMessage(true);
  };

  const onSubmit = (data: { id: string; status: string }) => {
    if (isEditing) {
      console.log(data);
      data.id = bookingToEdit.id;
      bookings.updateBooking(bookingToEdit.id, data);
      toast.success("Booking updated successfully!");
      closeModal();
    } else {
      data.status = "unclaimed";
      console.log(bookings);
      bookings.createNewBooking(data);
      toast.success("Booking created successfully!");
      reset();
    }
  };
  return (
    <div className={`flex flex-col gap-6 text-[#476c98]  font-mono `}>
      <form
        onSubmit={handleSubmit(onSubmit, () =>
          toast.error("Error Creating the Booking")
        )}
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="title" className="sm:basis-20 text-start ">
            Title:
          </label>
          <div className="grow">
            <input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              className="input w-full"
            />
            {errors.title && (
              <p className="text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="name" className="sm:basis-20 text-start">
            Name:
          </label>
          <div className="grow">
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Name must contain only letters",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
              className="input w-full"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="age" className="sm:basis-20 text-start">
            Age:
          </label>
          <div className="grow">
            <input
              type="number"
              id="age"
              {...register("age", {
                required: "Age is required",
                pattern: {
                  value: /[0-9]+/,
                  message: "Age must be a number",
                },
                validate: (value) =>
                  (value >= 18 && value <= 60) ||
                  "Age must be between 18 and 60",
              })}
              className="input w-full"
            />
            {errors.age && (
              <p className="text-red-500 mt-1">{errors.age.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="email" className="sm:basis-20 text-start">
            Email:
          </label>
          <div className="grow">
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                  message: "Please enter a valid email",
                },
              })}
              className="input w-full"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="phone" className="sm:basis-20 text-start">
            Phone:
          </label>
          <div className="grow">
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /\d{11}/,
                  message: "Please enter a valid 11-digit phone number",
                },
              })}
              className="input w-full"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
        {isEditing && (
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="status" className="sm:basis-20 text-start">
              Status:
            </label>

            <div className="grow">
              <select
                id="status"
                {...register("status", { required: "Status is required" })}
                className="input w-full"
              >
                <option value="unclaimed">Unclaimed</option>
                <option value="firstContact">First Contact</option>
                <option value="preparingWorkOffer">Preparing Work Offer</option>
                <option value="sentToTherapists">Send to Therapists</option>
              </select>
            </div>
          </div>
        )}
        <div>
          <div className="flex items-center justify-start gap-2">
            <Button type="primary">
              {isEditing ? "Update Booking" : "Create Booking"}
            </Button>
            {isEditing && (
              <Button type="danger" onClick={handleDelete}>
                Delete
              </Button>
            )}
          </div>
          <DeleteMessage
            isModalOpen={showDeleteMessage}
            setModalOpen={setShowDeleteMessage}
            confirmDelete={confirmDelete}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateBookingForm;
