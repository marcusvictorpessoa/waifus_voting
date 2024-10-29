import BackgroundSpinner from "@/components/BackgroundSpinner";
import { Header } from "@/components/Header";

export default function Result() {
  return (
    <main className="w-[100vw] h-[100vh]">
      {false && <BackgroundSpinner />}
      <Header />
      <div className="overflow-y-scroll p-2 w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
      <span className="text-black text-center text-lg bg-white rounded-sm p-1">Resultado</span>
        {[1, 2, 3, 4, 5].map((waifu) => {
          return (
            <div key={waifu} className="mt-4 max-sm:w-[100%] sm:w-[100%] h-[100px] backdrop-blur-lg shadow-md rounded-md">

            </div>
          )
        })}
      </div>
    </main>
  )
}