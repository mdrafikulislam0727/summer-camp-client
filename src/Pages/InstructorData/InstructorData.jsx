import useInstructorData from "../../hooks/useInstructorData";
import InstructorClasses from "./InstructorClasses";

const InstructorData = () => {
    const [instructorData] =useInstructorData()
    console.log(instructorData)
    return (
        <div className="grid md:grid-cols-3 gap-6 ml-4">
            {
                instructorData.map(instructorClass => <InstructorClasses key={instructorClass._id}
                instructorClass={instructorClass}
                ></InstructorClasses>)
            }
        </div>
    );
};

export default InstructorData;