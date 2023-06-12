import { useState } from "react";
import Swal from "sweetalert2";

const ManageClassesCard = ({addClasses}) => {
    const [disabledApprove, setDisabledApprove]=useState(false)
    const handelApprove = (id) =>{
        fetch(`http://localhost:5000/addclasses/approved/${id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'success full approve classes',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            setDisabledApprove(true)
        })
    }
    const {availableSeats,image,instructorName,name,price} =addClasses;
    return (
              <div className="card card-compact w- bg-base-100 shadow-xl  mt-10 mb-20 duration-500 hover:scale-110">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="font-bold">Classes Name {name}</p>
                <p>Instructor Name {instructorName}</p>
                <p>{availableSeats}</p>
                <p>{price}</p>
                <div className="card-actions justify-end flex">
                <button disabled={disabledApprove}  onClick={()=>handelApprove(addClasses._id)} className="btn btn-sm  text-gray-700 hover:bg-fuchsia-400 bg-fuchsia-200"> Approve</button>
                <button className="btn btn-sm  text-gray-700 hover:bg-teal-400 bg-teal-200">Deny</button>
                <button  className="btn btn-sm  text-gray-700 hover:bg-cyan-400 bg-cyan-200">feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassesCard;