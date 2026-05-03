import OrderBook from "@/components/OrderBook";
import { allCattles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CattleDetails = async ({ params }) => {
  const { id } = await params;
  const cattle = await allCattles();
  console.log(typeof id);
  const animal = cattle.find((c) => {
    const cid = Number(c.id) === Number(id);

    return cid;
  });

  return (
    <div className="container mx-auto min-h-screen">
      <div className=" p-8">
        <div key={animal.id} className=" mt-5 items-stretch">
          <div className="flex flex-col xl:flex-row justify-between gap-5">
            <div>
              <Image
                className="h-fit w-full xl:h-120"
                src={animal.image}
                alt={animal.name}
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="space-y-4 h-full">
              <p className="text-xl font-bold">{animal.name}</p>
              <p className="text-xl font-bold">৳ {animal.price}.00</p>
              <div className="flex gap-2">
                <p className="text-xl font-bold"> Specifications</p>
              </div>

              <hr className="text-gray-300" />
              <div className="flex justify-between">
                <p>
                  <span className=" font-semibold"> Age: </span> {animal.age}
                </p>
                <p>
                  {" "}
                  <span className=" font-semibold">Breed:</span> {animal.breed}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Type:</span>
                  {animal.type}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>

                  {animal.location}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Weight: </span>
                  {animal.weight}
                </p>
                <p>
                  <span className="font-semibold">Feed Management: </span>
                  {animal.feedManagement}
                </p>
              </div>
              <div className="">
                <span className="font-semibold">Grass: </span>

                {animal.feedVariety.grass.map((g, index) => (
                  <span key={index}>{g}, </span>
                ))}
              </div>
              <div className="">
                <span className="font-semibold">Grain: </span>

                {animal.feedVariety.grain.map((g, index) => (
                  <span key={index}>{g}, </span>
                ))}
              </div>
              <div>
                <p className="font-semibold">HealthCare: </p>
                <hr className="text-gray-300 my-2" />
                <div className="flex flex-wrap gap-2">
                  {animal.healthCare.map((health, index) => (
                    <span
                      className="flex flex-wrap items-center gap-2"
                      key={index}
                    >
                      {" "}
                      <FaCircleCheck className="text-yellow-400" /> {health}
                    </span>
                  ))}
                </div>
              </div>
              <p>
                <span className="font-semibold"> Description: </span>
                {animal.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <OrderBook></OrderBook>
    </div>
  );
};

export default CattleDetails;
