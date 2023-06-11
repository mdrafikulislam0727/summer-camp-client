import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
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
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index )=>  <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <button className="btn btn-ghost  text-gray-700 hover:bg-cyan-400 bg-cyan-200 me-2">MAKE ADMIN</button>
                                    <button className="btn btn-ghost  text-gray-700 bg-emerald-200 hover:bg-emerald-400 me-2">MAKE INSTRUCTOR</button>
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