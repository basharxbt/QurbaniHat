import { allCattles } from "@/lib/data";
import SingleCattle from "./SingleCattle";
import Link from "next/link";

const Cattle = async () => {
  const animals = await allCattles();
  console.log(animals);
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-semibold">Featured Cattle</h1>
      <p className="my-3 text-gray-500">
        Choose from our best cattle for your Qurbani
      </p>

      <div className="grid grid-cols-4 gap-5 ">
        {animals.slice(0, 4).map((ani) => (
          <SingleCattle key={ani.id} animal={ani}></SingleCattle>
        ))}
      </div>

      <div className="flex items-center justify-center mb-5 ">
        <Link
          className="bg-yellow-400 rounded-4xl font-semibold px-10 text-xl w-max  py-2"
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
