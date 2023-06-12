import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_upload_token;
const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const AddClasses = () => {
    const [axiosSecure]=useAxiosSecure()
    const {user}=useAuth()
    console.log(user)
    const { register, handleSubmit, } = useForm();
const onSubmit = data =>{ 
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url, {
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imagResponse =>{
        if(imagResponse.success){
            const imgURl=imagResponse.data.display_url;
            const {name,email,instructorName,price,availableSeats}=data;
            const newClass = {name, email, instructorName, price, availableSeats, image:imgURl, status: 'pending' , student:0, enrolled:0}
            console.log(newClass)
            axiosSecure.post('/addclasses', newClass)
            .then(data =>{
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added Classes successFully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })


        }
    })
};

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* ------- */}
                <div className="flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Class name
                            </span>
                        </label>
                        <input type="text" placeholder="Classes name" className="input input-bordered w-full " {...register("name", {required: true, maxLength: 110})} />
                    </div>

                    <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Classes Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                </div>
                </div>
                {/* ------- */}
                <div className="flex gap-4 my-3">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Instructor name
                            </span>
                        </label>
                        <input type="text" {...register("instructorName", {required: true, maxLength: 110})} placeholder="Instructor name" readOnly className="input input-bordered w-full " defaultValue={user?.displayName} />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Instructor email
                            </span>
                        </label>
                        <input type="text" {...register("email", {required: true, maxLength: 110})} placeholder="Instructor email" readOnly className="input input-bordered w-full " defaultValue={user?.email} />
                    </div>
                </div>
                {/* ------- */}
                <div className="flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Available seats
                            </span>
                        </label>
                        <input type="number" {...register("availableSeats", {required: true})} placeholder="Available seats" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Price
                            </span>
                        </label>
                        <input type="number" {...register("price", {required: true})} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <input className="btn bg-gray-400 text-white w-full mt-3" type="submit" value="Add Classes" />
            </form>
        </div>
    );
};

export default AddClasses;