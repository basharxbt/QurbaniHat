import { allCattles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const TopBreeds = async () => {
  const animals = await allCattles();

  const topBreeds = (
    <>
      <div className="flex ">
        {animals.slice(0, 5).map((a) => {
          return (
            <Link key={a.id} href={`/details-page/${a.id}`}>
              <div className="mx-10 text-center">
                <Image
                  className="h-30 w-full rounded-2xl"
                  src={a.image}
                  alt="animal"
                  height={200}
                  width={200}
                ></Image>

                <p className="font-bold mt-2">{a.breed}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
  return (
    <div className="my-15 container mx-auto">
      <h2 className="text-3xl font-bold text-center">Top Breeds</h2>
      <Marquee pauseOnHover={true} className="my-10  p-5">
        {topBreeds}
      </Marquee>
    </div>
  );
};

export default TopBreeds;
