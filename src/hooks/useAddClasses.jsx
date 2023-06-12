import { useEffect, useState } from "react"

const useAddClasses = () =>{
    const [addClassesData, setClassesData] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/addclasses')
        .then(res => res.json())
        .then(data =>{
            setClassesData(data)
            setLoading(false)
        })
    },[])
    return [addClassesData, loading]
}

export default useAddClasses;