import BackgroundSpinner from "@/components/BackgroundSpinner";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";


export default function Arigato() {
  return (
    <main className="w-[100vw] h-[100vh]">
      {false && <BackgroundSpinner />}
      <Header />
      <div className="flex justify-center items-center w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col justify-center items-center gap-4 max-sm:w-[80%] sm:w-[40%] h-[50%] backdrop-blur-lg shadow-md rounded-md">
          <Image src={'/waifu_heart.jpg'} alt="waifu coração" width={150} height={150} className="rounded-full" />
          <span className="text-black text-center w-[70%] text-lg bg-white rounded-sm p-1">Muchas gracias por votar, Onee chan!</span>
          <Link className="text-white text-center w-[70%] text-lg bg-[#f89fa1] rounded-sm p-1" href={'/result'}>Ver resultado</Link>
        </div>
      </div>
    </main>
  );
}
