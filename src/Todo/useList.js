import {useState} from 'react';


const useList=()=>{
    const [list,setList]=useState(["Aparna","Hello"])
    const push=(value)=>{
        if(value ===""){
            alert("Warning: Please enter something to be added to list")
        }
        else{
        const newList=list.concat(value)
        setList(newList)
        }
    }
    const pull=(index)=>{
        const newList=list.filter((listitem,listIndex)=>{
            return listIndex !== index
        })
        setList(newList)
    }
    return{
        list:list,
        push:push,
        pull:pull
    }
};
export default useList