import useClasses from "../../hooks/useClasses";
import ClassesCardData from "./ClassesCardData";

const ClassesCard = () => {
    const [classesData] =useClasses()
    const approvedClasses = classesData.filter(data => data.status === "approved")
    return (
        <div className="grid md:grid-cols-3">
            {
             approvedClasses.map(item =><ClassesCardData
                key={item._id}
                item={item}
                ></ClassesCardData>)
            }
        </div>
    );
};

export default ClassesCard;