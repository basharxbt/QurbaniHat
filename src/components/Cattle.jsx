import { allCattles } from "@/lib/data";
import SingleCattle from "./SingleCattle";
import Link from "next/link";

const Cattle = async () => {
  const animals = await allCattles();
  console.log(animals);
  return (
    <div className="container mx-auto my-5 ">
      <h1 className="text-3xl font-semibold text-center md:text-start ">
        Featured Cattle
      </h1>
      <p className="my-3 text-gray-500 text-center md:text-start">
        Choose from our best cattle for your Qurbani
      </p>

      <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {animals.slice(0, 4).map((ani) => (
          <SingleCattle key={ani.id} animal={ani}></SingleCattle>
        ))}
      </div>

      <div className="flex items-center justify-center mb-5 ">
        <Link
          className="bg-yellow-400 rounded-4xl font-semibold px-10 text-xl w-max  py-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          href="/animals"
        >
          {" "}
          View All
        </Link>
      </div>
    </div>
  );
};

export default Cattle;
