"use client"
import BackgroundSpinner from "@/components/BackgroundSpinner";
import { Header } from "../components/Header";
import useSignIn from "@/hooks/useSignIn";

export default function Home() {

  const { nombre, changeNombre, isSubmitDisable, loading, register } = useSignIn();

  return (
    <main className="w-[100vw] h-[100vh]">
      {loading && <BackgroundSpinner />}
      <Header />
      <div className="flex justify-center items-center w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col justify-center items-center gap-4 max-sm:w-[80%] sm:w-[40%] h-[50%] backdrop-blur-lg shadow-md rounded-md">
          <span className="text-black text-center w-[70%] text-lg bg-white rounded-sm p-1">Vote en la waifu que usted gustou, pero consciente!</span>
          <input value={nombre} onChange={({ target }) => changeNombre(target.value)} className="border text-black h-[40px] text-lg border-black rounded-sm w-[70%] p-1" type="text" placeholder="Digite aqui su nombre" />
          <button
            disabled={isSubmitDisable}
            onClick={() => register()}
            className={`border text-white ${isSubmitDisable ? 'border-gray-300' : 'border-[#f89fa1]'} h-[40px] rounded-sm ${isSubmitDisable ? 'bg-gray-300' : 'bg-[#f89fa1]'} w-[70%] p-1 ${isSubmitDisable ? 'bg-gray-300' : 'hover:bg-[#fabdbd] '}`}
          >
            VOTAR
          </button>
        </div>
      </div>
    </main>
  );
}
