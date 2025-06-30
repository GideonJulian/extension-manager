import Image from "next/image";

const Cards = ({ name, desc, src,isLightMode }) => {
  return (
    <div
     
       className={`w-full p-4 rounded-2xl border border-[#565a66] transition-all duration-300 ${
        isLightMode ? "bg-white text-black" : "bg-[hsl(226,25%,17%)] text-[#c7c7c7]"
      }`}
    >
      <div className="flex items-start gap-2">
        <Image src={src} alt={name} width={50} height={50} />
        <div>
          <h1 className={`font-semibold ${isLightMode ? 'text-black' : 'text-white'}`}>{name}</h1>
          <p className="text-[#c7c7c7] text-sm">{desc}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <button className={`px-5 py-2 rounded-3xl border border-[#565a66] ${isLightMode ? 'text-black' : 'text-white'}`}>
          Remove
        </button>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-12 h-6 bg-gray-700 peer-checked:bg-red-500 rounded-full transition-colors duration-300"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6"></div>
        </label>
      </div>
    </div>
  );
};

export default Cards;
