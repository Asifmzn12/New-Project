import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';
import { dataDigitalBestSeller } from './config/data';


function Section6() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }


  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    <div className="Section6  bg-slide mb-5">
      <div className='container py-lg-5 py-1'>
        <h5 className="top-heading  text-uppercase text-end">Testimonials</h5>
        <h4 className="sub-heading text-end mb-5">Thoughts about our work</h4>


        <Slider {...settings} id="testimonial-card">
          {dataDigitalBestSeller.map((item) => (
            <div className="testimonial-card mx-2 bg-body" key={item.id}>
                <p className='content-2 mx-4 py-lg-5 py-1 text-capitalize'><span className='heading1 '>&#x275B; &#x275B;</span> {item.title}  <span className='heading1'>&#x275C;	&#x275C;</span></p>
                <div className='d-flex mrgn flex-column justify-content-center align-items-center'>
                  <div className='img-content position-relative d-flex justify-content-center align-items-center flex-column'>
                    <div className='position-absolute my-3 ratingBox'>
                      <img src={item.centerimg} className='img-fluid '></img>
                      <div>

                      </div>

                    </div>

                    <div className='position-relative position-absolute ratingbox1 '>
                      <h4 className=' text-white ratingauthor'>{` ${item.name}`}</h4>
                      <p className='text-white ltrspace'>{item.star}</p>
                    </div>
                    <img src={item.secondimg} className='img-fluid'></img>
                  </div>

                </div>

             
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section6;
