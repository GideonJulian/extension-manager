import Image from "next/image";

const Cards = ({ src }) => {
  return (
    <div
      style={{ background: "hsl(226, 25%, 17%)" }}
      className="max-w-[350px] p-4 rounded-2xl  border-[#565a66] border "
    >
      <div className="flex items-center gap-2">
        <Image src="/images/logo-devlens.svg" width={50} height={50} />
        <div>
          <h1 className="font-[600]">DevLens</h1>
          <p className="text-[#c7c7c7] text-sm">
            Quickly inspect page layouts and visualize element boundaries{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <button className="px-5 py-2 rounded-3xl border-[#565a66] border">
          Remove 
        </button>
        
      </div>
    </div>
  );
};

export default Cards;
