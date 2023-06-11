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
                    <div className='absolute top-96 ml-5 '>
                        <p className='w-96 font-bold text-2xl text-teal-500'>Sports means all forms of physical activity which, through casual or organised participation, aim at expressing or improving physical fitness and mental wellbeing, forming social relationships or obtaining results in competition at all levels.</p>
                        <button className=" font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200">button</button>
                    </div>
                </div>

                <div>
                    <img src={bannerImg2} />
                </div>
                <div>
                    <img src={bannerImg3} />
                </div>
                <div>
                    <img src={bannerImg4} />
                </div>


            </Carousel>
    
    );
};

export default Banner;