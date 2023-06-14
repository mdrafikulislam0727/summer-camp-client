import useUsers from "../../hooks/useUsers";
import InstructorCard from "./InstructorCard";

const InstructorsPage = () => {
    const [userData]=useUsers()
    const instructorData =userData.filter(data => data.role === 'instructor')
    console.log(instructorData)
    return (
          <div className="grid md:grid-cols-3 gap-8">
            {
                instructorData.map(instructor => <InstructorCard 
                key={instructor._id}
                instructor={instructor}
                ></InstructorCard>)
            }
        </div>
    );
};

export default InstructorsPage;