import Banner from "@/components/Banner";
import Cattle from "@/components/Cattle";
import ExtraHomeSection from "@/components/ExtraHomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Banner></Banner>

      <Cattle></Cattle>
      <ExtraHomeSection></ExtraHomeSection>
    </div>
  );
}
