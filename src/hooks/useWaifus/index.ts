import { useEffect, useState } from "react"
import { DBFirestore } from "@/firebase";
import { collection, getDocs, doc, getDoc, runTransaction, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/modal";


export default function useWaifus(){

    const [waifus, setWaifus] = useState([] as {id: string, name: string}[]);
    const [loading, setLoading] = useState(false);

    const { closeModal } = useModal()

    const navigation = useRouter()


    async function getWaifus(){

        setLoading(true);

        const votanteId = localStorage.getItem('votante')

        try {
            if (votanteId) {
                const docRef = doc(DBFirestore, "votantes", votanteId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    //console.log("Document data:", docSnap.data());
                    if(docSnap.get('votado')){
                        navigation.replace('/arigato')
                    } else {
                        await getDocs(collection(DBFirestore, 'pretendientes')).then((query) => {
                            const queryData = query.docs.map((doc) => ({name: doc.get('name') as string, id: doc.id}));
                            setWaifus(queryData);
                            setLoading(false);
                        });
                    }
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            } else {
                navigation.replace('/')
            }
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    async function vote(waifuId: string, votanteId: string){
        
        closeModal()
        setLoading(true)

        try {

            const votanteRef = doc(DBFirestore, "votantes", votanteId);
            const waifuRef = doc(DBFirestore, "pretendientes", waifuId);

            const votingWaifu = await runTransaction(DBFirestore, async (transaction) => {

                const sfVotanteRef = await transaction.get(votanteRef)
                const sfWaifuRef = await transaction.get(waifuRef)
                
                if (!sfVotanteRef.exists() || !sfWaifuRef.exists()) {
                    throw "Document does not exist!";
                }

                const nombre = sfVotanteRef.get('nombre');

                const keyVote = `${nombre}-${waifuId}`

                transaction.update(waifuRef, { votes: arrayUnion(keyVote)})
                transaction.update(votanteRef, { votado: true})

            });
            console.log('transaction: ', votingWaifu);
            navigation.replace('/arigato');
            setLoading(false);
            
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    useEffect(() => {
        getWaifus();
    }, [])

    return {
        loading,
        waifus,
        vote,
    }
}