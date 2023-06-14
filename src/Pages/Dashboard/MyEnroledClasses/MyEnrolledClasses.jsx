import useMyEnrolledClasses from "../../../hooks/useMyEnroledClasses";

const MyEnrolledClasses = () => {
    const [myEnrolledClasses]=useMyEnrolledClasses()
    console.log(myEnrolledClasses)
    const {availableSeats,image,name,price} =myEnrolledClasses
    return (
        <div className="w-full pl-4">
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>availableSeats</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        
                         <tr>
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {name}

                                </td>
                                <td>{price}</td>
                                <td>{availableSeats}</td>
                                <td>
                                  
                                </td>
                                <th>
                                  
                                </th>
                            </tr>
                        
                        



                    </tbody>


                </table>
            </div>
        </div>
    </div>
    );
};

export default MyEnrolledClasses;