// import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';


function HomeSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",color:"white " }}
        onClick={onClick}
      />
    );
  }

  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     linkDefault: "",
  //   }));
  // };

  return (
    <div className="HomeSlider
    bg-img py-lg-5 py-1">
      <div className='container py-lg-5 py-1'>
        <Slider {...settings} className='home-slider'>

          <div className="carousel-item py-lg-5 py-1">
            <div className="row  py-lg-5 py-1 justify-content-center">
              <div className="col-lg-4 col-12">
                <div className="text-content">
                  <img src="title-icon.png" className="img-fluid" alt="Title Icon" />
                  <h5 className="home-title homeHeading text-white">
                    <span className="home-slderHeading">Order of the</span> <br />
                    Kings and Queens <br />
                    in the Holy Lands
                  </h5>
                  <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.
                  </p>
                  <button className="learnMore">Membership</button>
                </div>
              </div>
              <div className="col-md-8 col-12 position-relative img-section">
                <img src="locations.png" className="img-fluid locationmap" alt="Fire Center" />
                <img src="map.png" className="img-fluid map" alt="Map" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="text-content d-flex flex-column justify-content-center align-items-start gap-3 ">
                  <img src="title-icon.png" className="img-fluid" alt="Title Icon" />
                  <h5 className="home-title homeHeading text-white">
                    <span className="home-slderHeading">Order of the</span> <br />
                    Kings and Queens <br />
                    in the Holy Lands
                  </h5>
                  <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.
                  </p>
                  <button className="learnMore">Membership</button>
                </div>
              </div>
              <div className="col-md-8 position-relative img-section">
                <img src="firecenter.png" className="img-fluid locationmap" alt="Fire Center" />
                <img src="map.png" className="img-fluid map" alt="Map" />
              </div>
            </div>
          </div>


        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
