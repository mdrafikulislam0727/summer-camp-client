import { FaTrashAlt } from "react-icons/fa";
import useClassCard from "../../../hooks/UseClassesCard";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [cart, refetch] = useClassCard()

    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your classes has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full pl-4">
            <div className="">
                <h3 className="text-3xl font-bold">Total Classes : {cart.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>AvailableSeats</th>
                                <th>Pay</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((data, index) => <tr key={data._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {data.name}

                                    </td>
                                    <td>{data.instructor}</td>
                                    <td>{data.price}</td>
                                    <td className="text-center">{data.availableSeats}</td>
                                    <td>
                                        <button className="btn btn-sm bg-sky-200">Pay</button>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDelete(data)} className="btn btn-ghost  text-gray-700 hover:bg-cyan-400 bg-cyan-200"> <FaTrashAlt></FaTrashAlt> </button>
                                    </th>
                                </tr>
                                )
                            }



                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;