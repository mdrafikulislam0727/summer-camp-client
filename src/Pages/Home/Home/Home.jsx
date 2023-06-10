import ExtraSection from "../../../Components/ExtraSection/ExtraSection";
import PopularClass from "../../PopularClass/PopularClass";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;