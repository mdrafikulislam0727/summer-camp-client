import { useEffect, useState } from "react"

const useUsers = () =>{
    const [userData, setUserData] =useState([])
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>{
            setUserData(data)
            setLoading(false)
        })
    },[])
    return [userData, loading]
}

export default useUsers;