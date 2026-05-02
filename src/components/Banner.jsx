import cow1 from "@/asset/cow.png";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

const Banner = () => {
  return (
    <div className="bg-gray-200 min-h-[50vh] md:min-h-[80vh] w-full flex items-center justify-center ">
      <div className="flex flex-col gap-5 col-span-1 mx-auto animate__animated animate__slideInLeft px-4 text-center md:text-start">
        <h1 className="md:text-4xl font-bold">
          Qurbani Animals <br />
          Made Easy
        </h1>

        <p className="font-semibold text-gray-600">
          Animals prepared following halal guidelines <br /> for your Qurbani
          needs.
        </p>

        <Link
          className="bg-yellow-400 rounded-4xl font-semibold px-10 text-xl w-max  py-2"
          href="/animals"
        >
          {" "}
          Explore All{" "}
        </Link>
      </div>
      <div className="col-span-5">
        {" "}
        <Image
          src={cow1}
          height={1000}
          width={1000}
          alt="Desi Qurbani Cow"
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
