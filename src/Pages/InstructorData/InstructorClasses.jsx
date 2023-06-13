
const InstructorClasses = ({instructorClass}) => {
    console.log(instructorClass)
    const {availableSeats,enrolled,image,instructorName,status,name,price}=instructorClass
    return (
        <div className="card card-compact w- bg-base-100 shadow-xl  mt-10 mb-20 duration-500 hover:scale-110">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="font-bold text-[20px]">Classes Name : {name}</p>
                <p className="text-[15px] font-bold">Instructor Name {instructorName}</p>
                <p className="text-[15px] font-bold">Available Seats : {availableSeats}</p>
                <p className="text-[15px] font-bold">Price : $<span className="text-orange-500 font-bold">{price}</span></p>
                <p className="text-[15px] font-bold">Enrolled Student : {enrolled}</p>
                <p className="text-[15px] font-bold">Status : {status}</p>
                <div className="card-actions justify-end flex">
                <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Update</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorClasses;