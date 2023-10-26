// import { useState } from 'react';
import Slider from 'react-slick';
import slidercards from './config/homeslider';
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
    slidesToScroll: 1,
    initialSlide: 1,
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
    bg-img  py-1 ">
      <div className='container py-lg-1 py-1'>
        <Slider {...settings} className='home-slider'>

        {slidercards.map((card,index)=>(

          <div className="carousel-item" key={index}>
            <div className="row sliderrow justify-content-center">
              <div className="col-lg-4 mt-3">
                <div className="text-content d-flex flex-column justify-content-center align-items-start ">
                  <img src={card.img} className="img-fluid" alt="Title Icon" />
                  <h5 className="home-title homeHeading text-white my-2">
                    <span className="home-slderHeading ">{card.slderHeader}</span> <br />
                    {card.sliderHeading} <br />
                  {card.sliderheader2}
                  </h5>
                  <p className="content">
                  {card.content}
                  </p>
                  <button className="learnMore">Membership</button>
                </div>
              </div>
              <div className="col-md-8 position-relative img-section">
                <img src={card.locationImg} className="img-fluid locationmap" alt="Fire Center" />
                <img src={card.mapImg} className="img-fluid map" alt="Map" />
              </div>
            </div>
          </div>



        ))}



        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
