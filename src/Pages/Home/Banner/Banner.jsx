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
                    <div className='absolute top-96 ml-5 text-white'>
                        <p>this is home compontnt</p>
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