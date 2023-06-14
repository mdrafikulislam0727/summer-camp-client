
const PopularInstructorsCard = ({ data }) => {
    const {photo,email,name}=data
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl  mt-4 mb-20 duration-500 hover:scale-110">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <p className="font-bold">Instructor Name: {name}</p>
                <p>Email : {email}</p>
                <div className="card-actions justify-end">
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Select</button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;