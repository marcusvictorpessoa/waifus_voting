import { useEffect, useState } from "react"
import { DBFirestore } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";


export default function useSignIn(){

    const [nombre, setNombre] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSubmitDisable, setSubmitDisable] = useState(false);

    const navigation = useRouter()

    function changeNombre(name: string){
        setNombre(name);
    }

    function userAlreadyRegister(){
        setLoading(true);
        const votante = localStorage.getItem('votante')
        if(votante){
            setLoading(false);
            navigation.replace('/waifus')
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        userAlreadyRegister()
    }, []);

    useEffect(() => {
        if(nombre.trim().length < 3){
            setSubmitDisable(true)
        } else {
            setSubmitDisable(false)
        }
    }, [nombre]);

    async function register(){
        setLoading(true);
        try {
            const docRef = await addDoc(collection(DBFirestore, "votantes"), {nombre: nombre, votado: false});
            localStorage.setItem('votante', docRef.id)
            setNombre("")
            setLoading(false);
            navigation.replace('/waifus')
          } catch (e) {
            console.error("Error adding document: ", e);
            setLoading(false);
        } 
    }

    return {
        nombre,
        changeNombre,
        isSubmitDisable,
        loading,
        register
    }
}