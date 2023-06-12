import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] =useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    // admin
    const  handelMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:`${user.name} is an admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    // instructor
    const handelMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:`${user.name} is an Instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="w-full pl-4">
            <h2 className="text-3xl font-semibold text-center mb-4">Total Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index )=>  <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin'? 'admin' :  <button onClick={()=> handelMakeAdmin(user)} className="btn btn-ghost  text-gray-700 hover:bg-cyan-400 bg-cyan-200 me-2">MAKE ADMIN</button>}</td>

                                <td>
                                    {
                                        user.role === 'instructor'? 'instructor' : 
                                        <button  onClick={() => handelMakeInstructor(user)} className="btn btn-ghost  text-gray-700 bg-emerald-200 hover:bg-emerald-400 me-2">MAKE INSTRUCTOR</button>
                                    }
                                    
                                </td>
                            </tr>)
                        }
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;