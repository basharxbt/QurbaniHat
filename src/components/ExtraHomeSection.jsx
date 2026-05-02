import TopBreeds from "./TopBreeds";

const ExtraHomeSection = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-semibold text-center ">Qurbani Tips</h1>
        <p className="text-md font-semibold text-center text-gray-600 my-2 ">
          Learn how to perform qurbani properly
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-5 md:p-0">
          <p className="bg-slate-100 text-center p-10 rounded-2xl font- transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
            Choose a healthy animal that meets all Islamic requirements and is
            free from defects.
          </p>
          <p className="bg-slate-100 text-center p-10 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ">
            Buy early to avoid high prices and limited good-quality animals near
            Eid.
          </p>
          <p className="bg-slate-100 text-center p-10 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ">
            {" "}
            Ensure the sacrifice is done after Eid prayer with proper Islamic
            intention (niyyah).
          </p>
          <p className="bg-slate-100 text-center p-10 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ">
            Maintain strict hygiene during slaughtering and meat processing.
          </p>
          <p className="bg-slate-100 text-center p-10 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ">
            Divide meat fairly and prioritize distribution to poor and needy
            people.
          </p>
          <p className="bg-slate-100 text-center p-10 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ">
            Avoid waste and use all parts responsibly in a respectful way.
          </p>
        </div>
      </div>
      <div className="p-5 md:p-0">
        <TopBreeds></TopBreeds>
      </div>
    </div>
  );
};

export default ExtraHomeSection;
