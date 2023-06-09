import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassesCardData = ({ item }) => {
    const { image, name, instructor, availableSeats, price } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelAddToCard = item => {
        console.log(item)
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please login then select?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl  mt-28 mb-20 duration-500 hover:scale-110">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className="font-bold">Instructor Name: {instructor}</p>
                <p>Available Seats : {availableSeats}</p>
                <p>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handelAddToCard(item)} className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCardData;