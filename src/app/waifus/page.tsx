"use client"
import BackgroundSpinner from "@/components/BackgroundSpinner";
import { Header } from "@/components/Header";
import Modal from "@/components/Modal";
import { useModal } from "@/context/modal";
import { useVotante } from "@/context/votante";
import useWaifus from "@/hooks/useWaifus";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Waifus() {

  const { waifus, loading } = useWaifus();
  const { openModal, modal } = useModal()
  const keyVote = useRef("")

  const { name } = useVotante()

  useEffect(() => {
    const idDelVotante = localStorage.getItem('votante');
    const generateKeyVote = `${name}-${idDelVotante}`;
    keyVote.current = generateKeyVote;
  },[])

  

  

  return (
    <main className="w-[100vw] h-[100vh]">
      {loading && <BackgroundSpinner />}
      {modal.waifuName.length > 0 && <Modal />}
      <Header />
      <div className="overflow-y-scroll p-2 w-[100%] h-[90%] bg-[url(/snow.gif)] bg-no-repeat bg-cover font-[family-name:var(--font-geist-sans)]">
        <span className="text-black text-center text-lg bg-white rounded-sm p-1">Pretendientes</span>
        {waifus.map((waifu) => {
          return (
            <div key={waifu.id} onClick={() => openModal(waifu.name, keyVote.current, waifu.id)} className="mt-4 cursor-pointer p-2 max-sm:w-[100%] sm:w-[100%] h-[170px] backdrop-blur-lg shadow-md rounded-md">
              <div className="flex flex-row items-start gap-4">
                <Image src={`/${waifu.name}.jpeg`} alt='waifu image' width={100} height={100} className="rounded-full" />
                <span className="bg-white p-1 rounded-sm font-semibold">{waifu.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}