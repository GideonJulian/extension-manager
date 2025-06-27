import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="mx-auto p-4 max-w-[1150px]">
      <h1 className="">
        <Header />
      </h1>
      <div className="mt-20">
        <h1 className="font-bold text-white text-3xl">Extension List</h1>
      </div>
    </div>
  );
};

export default Home;
