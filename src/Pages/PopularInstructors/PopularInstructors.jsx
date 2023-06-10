import useClasses from "../../hooks/useClasses";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [classesData] =useClasses()
    const popularInstructorsData = classesData.filter(item => item.numberOfStudent > 25)
    return (
       <div>
        <h2 className="my-9 text-5xl font-bold text-center">Popular Instructors</h2>
         <div className="grid md:grid-cols-3">
            {
               popularInstructorsData.slice(0, 6).map(data =><PopularInstructorsCard
               key={data._id}
               data={data}
               ></PopularInstructorsCard>) 
            }
        </div>
       </div>
    );
};

export default PopularInstructors;