
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
function Footer() {
    return (
        <div className="footerbg py-lg-5 py-2 position-relative">
            <div className="container py-lg-5 py-1">
                <div className="row pt-5 text-white justify-content-center align-items-start ">
                    <div className="col-md-5">
                        <p className='footer-about'>Website designed and built by Plaxonic technologies Pvt Ltd
                            For technical issues with this website, please contact the webmistress at:mailto : contact@plaxonic.com This site was last modified on 12 july, 2023</p>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
                        <div className="navlinks">
                            <h5 className='footer-navtitle'>What We Do?</h5>
                            <ul className=" list-unstyled">

                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="navlinks">
                            <h5 className='footer-nav-title'>What We Do?</h5>
                            <ul className=" list-unstyled">

                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="subfooter py-4 text-white position-absolute w-100 ">
                <div className="container">
                    <div className="row justify-content-evenly align-items-start ">
                        <div className="col-md-5 ms-1">
                            <p className='copywrite'>© Copyright 2018 Order of Kings and Queens in the Holy Lands</p>
                        </div>
                        <div className="col-md-6 icons d-flex justify-content-center gap-4">
                            <BiLogoFacebookCircle size={"30px"} />
                            <BiLogoInstagramAlt size={"30px"} />
                            <AiFillTwitterCircle size={"30px"} />
                            <BiLogoYoutube size={"30px"} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer

