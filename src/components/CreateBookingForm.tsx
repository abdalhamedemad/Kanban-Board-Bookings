import { useForm } from "react-hook-form";
import Button from "../ui/Button.js";
import { useBookings } from "../context/bookingsContext.js";

function CreateBookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const bookings = useBookings();

  const onSubmit = (data) => {
    data.status = "unclaimed";
    console.log(bookings);
    bookings.createNewBooking(data);
    alert("Form submitted successfully!");
    reset();
  };
  return (
    <div className="flex flex-col gap-6 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="title" className="sm:basis-20">
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
          <label htmlFor="name" className="sm:basis-20">
            Name:
          </label>
          <div className="grow">
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="input w-full"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label htmlFor="age" className="sm:basis-20">
            Age:
          </label>
          <div className="grow">
            <input
              type="text"
              id="age"
              {...register("age", {
                required: "Age is required",
                pattern: {
                  value: /^[0-9]+$/,
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
          <label htmlFor="email" className="sm:basis-20">
            Email:
          </label>
          <div className="grow">
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
          <label htmlFor="phone" className="sm:basis-20">
            Phone:
          </label>
          <div className="grow">
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              className="input w-full"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <Button type="primary">Submit</Button>
      </form>
    </div>
  );
}

export default CreateBookingForm;
