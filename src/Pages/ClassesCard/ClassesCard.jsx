import useClasses from "../../hooks/useClasses";

const ClassesCard = () => {
    const [classesData] =useClasses()
    console.log(classesData)
    return (
        <div className="grid md:grid-cols-3">
            {
                classesData.map(data =><div key={data._id} className="card card-compact w-96 bg-base-100 shadow-xl  mt-28 mb-20 duration-500 hover:scale-110">
                <figure><img src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{data.name}</h2>
                  <p className="font-bold">Instructor Name: {data.instructor}</p>
                  <p>Available Seats : {data.availableSeats}</p>
                  <p>Price : ${data.price}</p>
                  <div className="card-actions justify-end">
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">Select</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default ClassesCard;