'use client'
import React, { createContext, ReactNode, useContext, useState } from "react";

type ModalPropsContext = { 
    modal: {waifuName: string, idUser: string, idWaifu: string}, 
    closeModal: () => void, 
    openModal: (nombre: string, votante: string, waifuId: string) => void
}

const ModalContext = createContext({} as ModalPropsContext)

export function ModalProvider({ children }: { children: ReactNode }) {

    const [modal, setModal] = useState({ waifuName: "", idUser: "", idWaifu: ""});

    function closeModal(){
        setModal({ waifuName: "", idUser: "", idWaifu: ""})
    }

    function openModal(nombre: string, votante: string, waifuId: string){
        setModal({ waifuName: nombre, idUser: votante, idWaifu: waifuId})
    }
   

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal  }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext);
    return context;
}