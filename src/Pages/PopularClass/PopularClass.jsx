import useClasses from "../../hooks/useClasses";
import PopularCard from "./PopularCard";

const PopularClass = () => {
    const [classesData] = useClasses()
    const popularData = classesData.filter(item => item.numberOfStudent > 20)
    return (
        <div>
            <h2 className="my-9 text-5xl font-bold text-center">Popular Classes</h2>
            <div className="grid md:grid-cols-3">
                {
                    popularData.slice(0, 6).map(item => <PopularCard
                        key={item._id}
                        item={item}
                    >

                    </PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;