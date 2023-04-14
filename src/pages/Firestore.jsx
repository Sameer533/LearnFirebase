import React from 'react'
import {getFirestore , collection , addDoc,getDoc,doc,query,where,updateDoc, getDocs, deleteField} from 'firebase/firestore'
import { app } from '../Firebase'
import { async } from '@firebase/util';





const firestoreRef = getFirestore(app);

const Firestore = () => {
const  WriteData = async() =>{
    const result = await addDoc(collection(firestoreRef , 'cities'),{
        name : "hyderabad",
        pincode : 500009,
       
    });
    console.log(result);
}
const MakeSubCollection = async() =>{
    addDoc(collection(firestoreRef , 'cities/83HQ0ibfrtd2vdgxCItx/places'),{
        name:"Hasmatpet",
        pincode:50009
    })
}

const ReadData = async() =>{
    const docRef = doc(firestoreRef , "cities/83HQ0ibfrtd2vdgxCItx/places" ,
    "ZppEMWyX5A7AqUQ8SD0u");
    const result = await getDoc(docRef);
    console.log(result.data());
}

const ReadDataByQuery = async() =>{
    const collectionRef = collection(firestoreRef ,"users");
    const q = query(collectionRef , where("isMale" ,"==",true));
    const result = await getDocs(q);
        result.forEach((val)=>console.log(val.data().name));
}

const UpdateData = async() =>{
    const docRef = doc(firestoreRef , "users","OCrYHV29qO7hjsWUe0tk");
    const result = await updateDoc(docRef , {
        isMale: false ,
        income:deleteField(),
    })
}







    return (
    <>
<button onClick={WriteData}>Write data </button>
<button onClick={MakeSubCollection}>WriteSubcollection
</button>
<button onClick={ReadData}>
    Read Data
</button>
<button onClick={ReadDataByQuery}>
    ReadData by Query
</button>
<button onClick={UpdateData}>Update data</button>
    </>
  )
}

export default Firestore