import { useEffect, useState } from "react"

const useAddClasses = () =>{
    const [classesData, setClassesData] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/addclasses')
        .then(res => res.json())
        .then(data =>{
            setClassesData(data)
            setLoading(false)
        })
    },[])
    return [classesData, loading]
}

export default useAddClasses;