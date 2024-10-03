function BookingWarper({ children, count, title }) {
  return (
    <div className="">
      <div className="border border-white  rounded-md">
        <div className="flex justify-between items-center text-gray-950 p-4 font-bold">
          <h4 className="text-lg font-semibold">{title}</h4>
          <span className="bg-slate-50 text-gray-950 rounded-full min-w-8 min-h-8 flex items-center justify-center ">
            {count}
          </span>
        </div>
        <div className="   h-[35rem] mt-2 overflow-auto px-4 ">{children}</div>
      </div>
    </div>
  );
}

export default BookingWarper;
