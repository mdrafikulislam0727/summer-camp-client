import ExtraSection from "../../../Components/ExtraSection/ExtraSection";
import PopularClass from "../../PopularClass/PopularClass";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;