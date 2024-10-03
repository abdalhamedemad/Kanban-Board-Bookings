function MemberCard({ name, age, email, phone }) {
  console.log(name);
  return (
    <div className="bg-slate-50 flex flex-col p-4 text-gray-950 items-start rounded-md mb-3 cursor-pointer hover:bg-slate-200 transform transition duration-300 hover:scale-105">
      <p className="flex justify-between items-center w-full mb-2">
        <span className="font-bold">{name}</span>
        <span className="text-sm text-gray-600">{age} yo</span>
      </p>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-600 text-sm">{phone}</p>
    </div>
  );
}

export default MemberCard;
