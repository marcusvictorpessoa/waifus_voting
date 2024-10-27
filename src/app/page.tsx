import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Header />
      <div className="flex justify-center items-center w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col justify-center items-center gap-2 max-sm:w-[70%] sm:w-[40%] h-[60%] backdrop-blur-lg shadow-md rounded-md">
          <span className="text-black text-center w-[70%] text-lg bg-white rounded-sm p-1">Vote en la waifu que usted gustou, pero consciente!</span>
          <input className="border text-lg border-black rounded-sm w-[70%] p-1" type="text" placeholder="Digite aqui su nombre" />
          <button className="border text-white border-[#f89fa1] rounded-sm bg-[#f89fa1] w-[70%] p-1 hover:bg-[#fabdbd]">VOTAR</button>
        </div>
      </div>
    </main>
  );
}
