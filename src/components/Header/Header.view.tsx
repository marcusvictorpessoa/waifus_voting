"use client"
import { useVotante } from "@/context/votante";
import Image from "next/image";
import { useEffect } from "react";


export function HeaderView() {

    const { name, getVotanteData} = useVotante();

    useEffect(() => {
        getVotanteData()
    },[])

    return (
        
        <header className="w-[100%] h-[10%] bg-[#f89fa1] flex justify-between items-center px-2">
            <span className="text-white text-2xl italic font-semibold">Waifus &hearts;</span>
            <div className="flex gap-2 items-center">
                <span className="text-lg text-white font-medium">Olá{name ? `, ${name}` : ''}</span>
                <Image className="w-[50px] h-[50px] rounded-full" width={50} height={50} src="/roxy.jpeg" alt="waifu do bebelo roxo" />
            </div>
        </header>
    )
}