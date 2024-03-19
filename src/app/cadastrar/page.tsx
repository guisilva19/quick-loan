import Image from "next/image";
import background from "../../assets/background/back.svg";
import FormRegister from "@/components/Register/Register";

export default function Login() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center lg:bg-[#9377ef2b]">
        <div className="w-full flex justify-center xs:w-96 sm:shadow py-10 rounded-2xl lg:hidden animate-fade-down animate-once">
          <FormRegister />
        </div>
        <div className="hidden lg:flex w-[900px] h-5/6 shadow-2xl rounded-2xl bg-white animate-fade-down animate-once">
          <div className="w-6/12 flex">
            <Image src={background} alt="icon" className="-mt-10" />
          </div>
          <div className="w-6/12 flex from-[#9377EF] to-[#6e4ed6] bg-gradient-to-r justify-center items-center rounded-2xl">
            <FormRegister />
          </div>
        </div>
      </main>
    </>
  );
}