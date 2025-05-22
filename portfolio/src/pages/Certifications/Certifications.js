import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cert1 from '../../images/cert1.png';
import NXTWAVE from "../../images/NXTWAVE.jpg";
import PW from "../../images/PW.jpg";

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <div className="certifications-content">
          <div className="certifications-title">
            <h2>Certifications</h2>
          </div>
          <div className="certifications-swiper">
            <Swiper navigation={true} modules={[Navigation]} className="bannerSwiper">
              <SwiperSlide>
                <img src={cert1} alt="slider1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={PW} alt="slider2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={NXTWAVE} alt="slider2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certifications;