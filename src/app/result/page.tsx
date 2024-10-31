"use client"
//import BackgroundSpinner from "@/components/BackgroundSpinner";
import { Header } from "@/components/Header";
import useResult from "@/hooks/useResult";
import Image from "next/image";

export default function Result() {

  const { result } = useResult()

  return (
    <main className="w-[100vw] h-[100vh]">
      {/*loading && <BackgroundSpinner />*/}
      <Header />
      <div className="overflow-y-scroll p-2 w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
        <span className="text-black text-center text-lg bg-white rounded-sm p-1">Resultado</span>
        {result.map((waifu, index) => {
          return (
            <div key={waifu.id} className="mt-4 p-2 max-sm:w-[100%] sm:w-[100%] min-h-[170px] backdrop-blur-lg shadow-md rounded-md">
              <div className="flex flex-row items-start gap-4">
                <span className="p-1 text-black text-xl font-semibold">{index + 1}º</span>
                <Image unoptimized={true} src={`/${waifu.name.toLowerCase()}.jpeg`} alt='waifu image' width={100} height={100} className="rounded-full" />
                <div className="flex flex-col gap-2">
                  <span className="bg-white text-black p-1 rounded-sm font-semibold">{waifu.name}</span>
                  <span className="text-white font-bold bg-green-500 p-1 rounded-sm">Votos: {waifu.votes.length}</span>
                  {waifu.votes.length > 0 && <span className="text-black font-semibold">Eleitores</span>}
                  <div className="flex flex-wrap gap-2">
                    {waifu.votes.map((vote) => {

                      const voteName = vote?.split('-')[0];
                      return (
                        <span className="bg-white text-black p-1 rounded-sm font-semibold" key={vote}>{voteName}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}