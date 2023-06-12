
const InstructorCard = ({instructor}) => {
    const {email,name,photo}=instructor
    return (
       <div className="mt-20">
         <div className="card card-compact w- bg-base-100 shadow-xl  mt-10 mb-20 duration-500 hover:scale-110">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <p>Instructor Name {name}</p>
                <p>Instructor Email {email}</p>
                <div className="card-actions justify-end flex">
                
                </div>
            </div>
        </div>
       </div>
    );
};

export default InstructorCard;