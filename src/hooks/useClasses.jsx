import { useEffect, useState } from "react";

const useClasses = () =>{
    const [classesData, setClassesData] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>{
            setClassesData(data)
            setLoading(false)
        })
    },[])
    return [classesData, loading]

}
export default useClasses;