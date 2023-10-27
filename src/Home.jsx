// import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();
import Slider from 'react-slick';
import slidercards from './config/homeslider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';
import cards from './config/cards'
import { dataDigitalBestSeller } from './config/data';
import "./assets/css/Section5.css"
import "./assets/css/Section7.css"


function Home() {
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
        style={{ ...style, display: "block", color: "white " }}
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


  // const [defaultImage, setDefaultImage] = useState({});
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    dotsClass: "button__bar",
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




  return (
    <>
      <div className="HomeSlider
    bg-img  py-1 ">
        <div className='container py-lg-1 py-1'>
          <Slider {...settings} className='home-slider'>

            {slidercards.map((card, index) => (

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

      <div className='section2'>
        <div className="container pt-5">
          <div className="row pt-5 justify-content-center align-items-center">
            <div className="col-md-6 py-lg-5 py-1" data-aos="fade-down">
              <h3 className="top-heading">WHERE IT ALL BEGAN</h3>
              <h4 className="sub-heading">How are We?</h4>
              <p className="content">The Order is a non-profit charity, of the type referred to as a hereditary society. The Objects of the Order are charitable and educational and shall specifically serve to encourage the study of history; to verify the genealogy of descendants of monarchs who were present in the Holy Lands in his or her lifetime; to accomplish research, preserve manuscripts, wills, deeds, and other documents; to support the restoration of</p>
            </div>
            <div className="col-md-6 py-lg-5 py-1 position-relative" data-aos="fade-left">
              <img src="children.png" className="img-fluid" alt="Children" />
              <img src="playicon.png" className="img-fluid position-absolute playicon" alt="Play Icon" />
            </div>
          </div>
        </div>

      </div>


      <div className='section3'>
        <div className="  m-0 p-0 py-lg-5 py-1 my-5">
          <div className="container position-relative   bg-white z-2 py-lg-5 py-1 ">
            <div className="container  ">
              <div className="row mx-lg-5 mx-0 bg-white borderrounded py-3 position-relative  border-right  justify-content-md-start  justify-content-lg-center align-items-md-start align-items-lg-center">
                {cards.map((cardinfo, index) => (
                  <div className="col-lg-4 col-md-6 brdr border-line  position-relative d-flex flex-column justify-content-center align-items-center" key={index} data-aos="fade-right">
                    <div className="imgcontainer my-2">
                      <img src={cardinfo.img}></img>
                    </div>
                    <div className="text-center py-3 ">
                      <h5 className=" cardtittle">{cardinfo.title}</h5>
                      <p className=" cardcontent">{cardinfo.para}</p>


                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 position-absolute top-0 start-0  yellowbox  d-none d-lg-block   ">
              <img src="yellowbox.png" className="img-fluid "></img>

            </div>
            <div className="col-md-4 position-absolute end-0 bottom-0 text-end  yellowbox d-none d-lg-block ">
              <img src="yellowbox.png" className="img-fluid "></img>

            </div>


          </div>
        </div>

      </div>

      <div className="bgimg section4">
        <div className="container py-lg-5 py-1">
          <div className="row  justify-content-between align-items-center">
            <div className="col-lg-6 col-md-12" data-aos="fade-right">
              <img src="4thsection.png" className="img-fluid"></img>

            </div>
            <div className="col-lg-5 col-md-12" data-aos="fade-left">
              <div className="row ">
                <div className="col-md-12">
                  <h5 className="top-heading text-uppercase">Lorem ipsum</h5>
                  <h4 className="sub-heading text-capitalize">Here to Bring People
                    <br></br>  Together to Help</h4>
                  <p className="content">The majority have suffered alteration all injected humours randomises.There are many variations of passages of lorem ipsum available, but the majority have suffered alteration all form injected humours randomises don&apos;t look even slightly belvable.</p>

                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row py-3 justify-content-md-between justify-content-evenly">
                <div className="col-md-5 rounded bg-white leftbox d-flex flex-column justify-content-center align-items-center p-0  gap-1 shadow-lg" >
                  <div className="py-2 my-3 my-md-0">
                    <img src="heart.png" className="img-fluid"></img>

                  </div>
                  <h6 className="numbers">500</h6>
                  <p className="users text-uppercase">Volunteers</p>

                </div>
                <div className="col-md-5 rounded bg-white  rightbox py-4 d-flex flex-column justify-content-center align-items-center shadow-lg gap-1">
                  <div className="py-2 my-3 my-md-0">
                    <img src="users.png" className="img-fluid"></img>
                  </div>
                  <h6 className="numbers">2K</h6>
                  <p className="users text-uppercase">Beneficiaries</p>

                </div>
              </div>


            </div>


          </div>


        </div>
      </div>



      <div className="section5">
        <div className="container py-lg-5 py-1">
          <div className="row">
            <div className="col-lg-6 col-md-12 " data-aos="fade-right">
              <div className=" d-flex flex-column gap-2">
                <h5 className="top-heading">WHERE IT ALL BEGAN</h5>
                <h4 className="sub-heading">Become a member</h4>
                <p className="content">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
              </div>
              <div className="buttons d-flex flex-wrap gap-md-5 gap-3 my-2 my-md-4" >
                <div className="col-xl-4 col-lg-6">
                  <button className="memberbtn px-5">Membership</button>
                </div>
                <div className="col-xl-4 col-lg-5" >
                  <button className="rounded-pill  learnMore">Learn more</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6  py-3" data-aos="fade-left">
              <img src="section5.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>


      <div className="Section6  bg-slide mb-5" data-aos="fade-right" >
        <div className='container pt-lg-5 py-1'>
          <h5 className="top-heading  text-uppercase text-end">Testimonials</h5>
          <h4 className="sub-heading text-end mb-5">Thoughts about our work</h4>


          <Slider {...settings2} id="testimonial-card">
            {dataDigitalBestSeller.map((item) => (
              <div className="testimonial-card mx-2 bg-body" key={item.id} aria-activedescendant='true' data-aos="fade-left">
                <p className='content-2 mx-4 py-lg-5 py-1 text-capitalize'><span className='heading1 '>&#x275B; &#x275B;</span> {item.title}  <span className='heading1'>&#x275C;	&#x275C;</span></p>
                <div className='d-flex mrgn flex-column justify-content-center align-items-center'>
                  <div className='img-content position-relative d-flex justify-content-center align-items-center flex-column'>
                    <div className='position-absolute my-3 ratingBox'>
                      <img src={item.centerimg} className='img-fluid '></img>
                      <div>

                      </div>

                    </div>

                    <div className=' position-absolute ratingbox1 '>
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


      <div className="bgchild py-lg-5 py-1 section7">
        <div className="container py-lg-5 py-1">
          <div className="row py-lg-5 py-1  justify-content-between align-items-start">
            <div className="col-md-12 col-lg-6 position-relative" data-aos="fade-right">
              <div className="img position-relative">
                <img src="section7.png" className="img-fluid" alt=""></img>
                <img src="centerloog.png" className="img-fluid position-absolute iconlogo"></img>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-white d-flex flex-column justify-content-center  gap-1" data-aos="fade-left">
              <h5 className="top-heading ">Our Charity video tour</h5>
              <h4 className="sub-heading text-uppercase">Feeding children approach</h4>
              <p className="content">The majority have suffered alteration all ipauminjected humours randomises.There are many variations of passages of lorem ipsum available, but the majority have.</p>
            </div>
          </div>


        </div>

      </div>

    </>



  );
}

export default Home;
