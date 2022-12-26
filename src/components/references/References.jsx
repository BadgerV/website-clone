import "./references.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const References = () => {
  const checkScreenSize = () => {
    const small = 1;
    const large = 3;
    if (window.innerWidth < 720) {
      return small;
    } else {
      return large;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
  });

  return (
    <div className="references_main">
      <div className="title_container">
        <h1 className="reference_title">
          Our customers rely on our document management services, see what they
          have to say
        </h1>
      </div>

      <Swiper
        slidesPerView={checkScreenSize()}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper"
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="inside_slide">
            <span className="inside_text">
              "Your ability to handle exceptions is outstanding. You've even
              helped us enhance OUR accuracy, resulting in near perfection!
              Thank you. P.S. This may help me get promoted!"
            </span>

            <span className="additional_text">- Steve, A/P Supervisor</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="inside_slide">
            <span className="inside_text">
              "SideKick has been processing our documents every week for over
              nine years. Their professional staff and proven product has given
              us quick and easy access to our important documents. There has
              never been a reason for concern, when the job is done, it's done
              right. That is outstanding service!
            </span>

            <span className="additional_text">
              - Cindy, Food Services Company
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="inside_slide">
            <span className="inside_text">
              "Partnering with SideKick to digitally archive our documents has
              been a real asset. They have been working with documents dating
              back to 1873 ... the scanned images eliminate wear and tear on our
              fragile paper documents and actually look better than the
              originals. Having computer access to our documents has also saved
              a ton of time by not having to run to the vault to reference our
              records."
            </span>

            <span className="additional_text">
              Mark, Cemetery Services Company
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="inside_slide">
            <span className="inside_text">
              "Anyone can scan a piece of paper. But SideKick is one company
              that knows how to use imaging to substantially improve our
              payables process."
            </span>

            <span className="additional_text">
              - Christine, Senior Living Complex Manager
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="inside_slide">
            <span className="inside_text">
              "SideKick scans many court related documents for us on a daily
              basis. Rick & his staff work with several of our departments and
              always deliver a quick turn-around and excellent customer service.
              Their solutions for handling our special projects are consistently
              right on target, they are definitely committed to understanding
              our needs." - Cheryl, Leading Law Publisher "Anyone can scan a
              piece of paper. But SideKick is one company that knows how to use
              imaging to substantially improve our payables process." - Carl,
              CEO Large Electronics
            </span>

            <span className="additional_text">
              - Christine, Senior Living Complex Manager
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default References;
