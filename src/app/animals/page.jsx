"use client";

import { allCattles } from "@/lib/data";
import SingleCattle from "@/components/SingleCattle";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";
const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [sorted, setSorted] = useState("default");

  useEffect(() => {
    const fetchAnimals = async () => {
      const res = await allCattles();
      setAnimals(res);
    };

    fetchAnimals();
  }, []);

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sorted === "low") return a.price - b.price;
    if (sorted === "high") return b.price - a.price;
  });
  return (
    <div className="container mx-auto px-5 md:px-0 my-5">
      <div className="text-center md:text-start">
        <h1 className="text-3xl font-semibold">Featured All Cattle</h1>
        <p className="my-3 text-gray-500">
          Choose from our best cattle for your Qurbani
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-100 p-5 rounded-xl  my-3">
        <h2 className="text-xl font-semibold mb-2">Sort By Price</h2>
        <select
          onChange={(e) => setSorted(e.target.value)}
          defaultValue="Pick a color"
          className="select appearance-none "
        >
          <option value="default" className="font-semibold">
            Default
          </option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sortedAnimals.map((ani) => (
          <SingleCattle key={ani.id} animal={ani}></SingleCattle>
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
