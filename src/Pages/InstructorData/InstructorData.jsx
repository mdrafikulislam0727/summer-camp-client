import useInstructorData from "../../hooks/useInstructorData";

const InstructorData = () => {
    const [instructorData] =useInstructorData()
    console.log(instructorData)
    return (
        <div>
            <h2>myclasses {instructorData.length}</h2>
        </div>
    );
};

export default InstructorData;