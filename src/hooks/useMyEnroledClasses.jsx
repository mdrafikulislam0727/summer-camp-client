import { useEffect, useState } from "react"
import useAuth from "./useAuth"

const useMyEnrolledClasses = () =>{
    const [myEnrolledClasses, setMyEnrolledClasses] =useState([])
    const [loading, setLoading] =useState(true)
    const {user}=useAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/payments/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setMyEnrolledClasses(data)
            setLoading(false)
        })
    },[user.email])
    return [myEnrolledClasses, loading]
}

export default useMyEnrolledClasses;