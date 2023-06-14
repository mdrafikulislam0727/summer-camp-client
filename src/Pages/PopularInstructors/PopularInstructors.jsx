import useUsers from "../../hooks/useUsers";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructors = () => {
      const [userData] =useUsers();
      const instructorData =userData.filter(data => data.role === 'instructor')

       return (
      <div>
         <h2 className="uppercase text-4xl text-center font-bold my-3">Popular Instructors</h2>
      <div className="grid md:grid-cols-3 mt-10">
       {
         instructorData.slice(0, 6).map(data =><PopularInstructorsCard 
         key={data._id}
         data={data}
         ></PopularInstructorsCard>)
       }
       </div>
      </div>
    );
};

export default PopularInstructors;