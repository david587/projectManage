import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [ error, setError ] = useState(null)

    //realtime data for document
    useEffect(()=>{
        const ref = projectFirestore.collection(collection).doc(id)

        //get realitme updates, when someting changes in db it fires again
        const unsubscribe = ref.onSnapshot((snapshot)=>{
            //get the data from snapshot
            setDocument({...snapshot.data(), id: snapshot.id})
            setError(null)
        }, (err) => {
            console.log(err.message);
            setError("failed to get document")
        })

        //clenaup function
        return () =>  unsubscribe()

    },[collection, id])

    return { document, error }

}