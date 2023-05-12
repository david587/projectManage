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
            //check that id is exist
            if(snapshot.data()){
                //get the data from snapshot
                setDocument({...snapshot.data(), id: snapshot.id})
                setError(null)
            }
            else{
                setError('no such document exists')
            }
            
        }, (err) => {
            console.log(err.message);
            setError("failed to get document")
        })

        //clenaup function
        return () =>  unsubscribe()

    },[collection, id])

    return { document, error }

}