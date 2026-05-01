import Image from "next/image";
import Link from "next/link";

const SingleCattle = ({ animal }) => {
  return (
    <div>
      <div className="card bg-base-100 h-11/12 shadow-sm">
        <figure className="">
          <Image
            className="w-full h-full"
            src={animal.image}
            alt={animal.breed}
            width={1000}
            height={1000}
          ></Image>
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-xl">{animal.name}</h2>
            <div>
              <p className="font-bold text-lg text-yellow-800">
                ৳{animal.price}.00
              </p>
            </div>
          </div>
          <p className="text-gray-600">{animal.description}</p>

          <div className="card-actions ">
            <Link
              href={`/details-page/${animal.id}`}
              className="btn bg-yellow-400 w-full"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCattle;
