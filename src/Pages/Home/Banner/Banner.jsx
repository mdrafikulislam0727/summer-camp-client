import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/imag/sport-img1.png'
import bannerImg2 from '../../../assets/imag/sport-img2.png'
import bannerImg3 from '../../../assets/imag/sport-img3.png'
import bannerImg4 from '../../../assets/imag/sport-img4.png'


const Banner = () => {
    return (

        <Carousel>
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='absolute top-72 ml-5 '>
                    <p className='w-96 font-bold text-2xl text-lime-500 bg-black bg-opacity-30'>Sports means all forms of physical activity which, through casual or organised participation, aim at expressing or improving physical fitness and mental wellbeing, forming social relationships or obtaining results in competition at all levels.</p>
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">button</button>
                </div>
            </div>

            <div className="relative">
                <img src={bannerImg2} />
                <div className='absolute top-80 ml-5 '>
                    <p className='w-96 font-bold text-2xl text-lime-500 bg-black bg-opacity-70'>Badminton is a fast-paced sport that requires continuous movement and quick bursts of energy. Regular play can improve your cardiovascular fitness, strengthen your heart, and enhance lung capacity.
                        Weight Management: Badminton is an excellent calorie-burning activity. Playing badminton for an hour can help you burn a significant amount of calories, which can contribute to weight loss and weight management.</p>
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">button</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerImg3} />
                <div className='absolute top-80 ml-5 '>
                    <p className='w-96 font-bold text-2xl text-lime-500 bg-black bg-opacity-70'>Chess is a game that requires deep analytical thinking and problem-solving skills. It challenges players to anticipate and plan several moves ahead, evaluate different possibilities, and make strategic decisions based on limited information. Regular chess practice can enhance critical thinking abilities and improve problem-solving skills.</p>
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">button</button>
                </div>
            </div>
            <div>
                <img src={bannerImg4} />
                <div className='absolute top-80 ml-5 '>
                    <p className='w-96 font-bold text-2xl text-lime-500 bg-black bg-opacity-70'>Football is a highly active sport that involves running, sprinting, jumping, and kicking. Regular participation in football can improve cardiovascular health, endurance, speed, agility, and overall physical fitness <br />Cricket involves batting, bowling, and fielding, all of which require excellent hand-eye coordination. Regular practice can improve coordination, reflexes, and overall motor skills</p>
                    <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">button</button>
                </div>
            </div>


        </Carousel>

    );
};

export default Banner;