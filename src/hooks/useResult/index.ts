import { useEffect, useState } from "react"
import { DBFirestore } from "@/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";


export default function useResult(){

    const [result, setResult] = useState([] as {id: string, name: string, votes: string[]}[]);

    useEffect(() => {
        const q = query(collection(DBFirestore, "pretendientes"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const queryData: {id: string, name: string, votes: string[]}[] = [];
            querySnapshot.forEach((doc) => {
                queryData.push({name: doc.get('name') as string, id: doc.id, votes: doc.get('votes')});
            });

            setResult(queryData.sort((waifu1, waifu2) => waifu2.votes.length - waifu1.votes.length))
        });

        return () => unsubscribe()
    }, []);

    return {
        result,
    }
}