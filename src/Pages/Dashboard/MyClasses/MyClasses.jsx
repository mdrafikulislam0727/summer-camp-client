import useClassCard from "../../../hooks/UseClassesCard";

const MyClasses = () => {
    const [cart]=useClassCard()
    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold">Total Classes : {cart.length}</h3>
            </div>
        </div>
    );
};

export default MyClasses;