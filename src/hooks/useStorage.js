import { useEffect, useState } from "react";
import { projectStore, projectFirestore, timestamp } from "../firebase/config";


const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStore.ref(file.name);
        //creating an address with filename for the file
        const collectionRef = projectFirestore.collection('images');
        /*
        creating collection to which we want to store the document. 
        It references a particular collection. 
        If it doesn't exist, then it creates a collection with that name
        */ 
    
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = ( snap.bytesTransferred/snap.totalBytes ) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            //adding a document by passing an object that represents this document 
            setUrl(url);
        });
        /*
        putting (uploading) the file at that adsress which listens to an event 'state_changed' 
        which will fire a function whenever the state changes, i.e, the progress changes. 
        This function takes in an argument snap which is a snapshot of the progress. It also 
        takes a 3rd argument function which fires when there's any error. Finally there's 
        another argument which will fire when the upload is complete.
    
        */
    }, [file]);
    return  {progress, error, url};
}
 
export default useStorage;