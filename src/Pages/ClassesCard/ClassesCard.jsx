import useClasses from "../../hooks/useClasses";
import ClassesCardData from "./ClassesCardData";

const ClassesCard = () => {
    const [classesData] =useClasses()
    console.log(classesData)
    return (
        <div className="grid md:grid-cols-3">
            {
                classesData.map(item =><ClassesCardData
                key={item._id}
                item={item}
                ></ClassesCardData>)
            }
        </div>
    );
};

export default ClassesCard;