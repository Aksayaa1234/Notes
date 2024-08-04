import { useState } from "react"

const localStorage=(key)=>{
    let prev=localStorage.getItem(key);
    let notes=[];
    if(!prev)
    notes=[];
    else
    notes=JSON.parse(prev);

    let [store,setStore]=useState(notes);
    
    let Additems=(val)=>{
        setStore((state)=>{
            let temp=[...state,val];
            localStorage.setItem(key,JSON.stringify(temp));
            return temp;
        })
    }

    let Removeitems=(i)=>{
        setStore((state)=>{
            let temp=[...state];
            temp.splice(i,1);
            localStorage.setItem(key,Json.stringify(temp));
            return temp;
        })
    }
    return [store,Additems,Removeitems];
}