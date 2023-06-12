import useUsers from "../../hooks/useUsers";

const InstructorsPage = () => {
    const [userData]=useUsers()
    const instructorData =userData.filter(data => data.role === 'instructor')
    console.log(instructorData)
    return (
        <div>
            
        </div>
    );
};

export default InstructorsPage;