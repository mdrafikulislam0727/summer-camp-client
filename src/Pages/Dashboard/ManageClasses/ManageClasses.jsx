import useAddClasses from "../../../hooks/useAddClasses";
import ManageClassesCard from "./ManageClassesCard";

const ManageClasses = () => {
    const [addClassesData] =useAddClasses()
    console.log(addClassesData)
    return (
        <div className="grid md:grid-cols-3 gap-6 ml-4">
           {
            addClassesData.map(addClasses =><ManageClassesCard
            key={addClasses._id}
            addClasses={addClasses}
            ></ManageClassesCard>)
           }
        </div>
    );
};

export default ManageClasses;