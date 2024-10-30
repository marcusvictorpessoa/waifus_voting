'use client'
import { DBFirestore } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { createContext, ReactNode, useContext, useState } from "react";

const VotanteContext = createContext({} as {name: string, getVotanteData: () => void})

export function VotanteProvider({ children }: { children: ReactNode }) {

    const [votante, setVotante] = useState("");

    async function getVotanteData() {

        const votanteId = localStorage.getItem('votante')

        try {
            if (votanteId) {
                const docRef = doc(DBFirestore, "votantes", votanteId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    //console.log("Document data:", docSnap.data());
                    setVotante(docSnap.get('nombre'))
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <VotanteContext.Provider value={{ name: votante, getVotanteData }}>
            {children}
        </VotanteContext.Provider>
    )
}

export function useVotante() {
    const context = useContext(VotanteContext);
    return context;
}