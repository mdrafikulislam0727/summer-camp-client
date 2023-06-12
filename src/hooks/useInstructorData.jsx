import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useInstructorData =() =>{
    const {user}=useAuth()
    const [instructorData, setinstructorData] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/addclasses/instructor/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setinstructorData(data)
            setLoading(false)
        })
    },[])
    return [instructorData, loading]
}

export default useInstructorData;