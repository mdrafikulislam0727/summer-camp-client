import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../src/assets/swiper/bowilng.png'
import img2 from '../../../src/assets/swiper/goif.png'
import img3 from '../../../src/assets/swiper/img1.png'
import img4 from '../../../src/assets/swiper/img3.png'
import img5 from '../../../src/assets/swiper/img4.png'
import img6 from '../../../src/assets/swiper/img6.png'
import img7 from '../../../src/assets/swiper/rugby.png'
import img8 from '../../../src/assets/swiper/bolleyball.png'
import img9 from '../../../src/assets/swiper/img5.png'



const ExtraSection = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
          
            
        </Swiper>
    );
};

export default ExtraSection;