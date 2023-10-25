
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import './footer.css'
function Footer() {
    return (
        <div className="footerbg position-relative">
            <div className="container py-lg-5 py-1">
                <div className="row py-lg-5 py-1 text-white justify-content-center align-items-start ">
                    <div className="col-md-6">
                        <p className='footer-about'>Website designed and built by Plaxonic technologies Pvt Ltd
                            For technical issues with this website, please contact the webmistress at:mailto : contact@plaxonic.com This site was last modified on <strong>12 july, 2023</strong></p>
                    </div>
                    <div className="col-md-3 col-12 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
                        <div className="navlinks">
                            <h5 className='nav-title'>What We Do?</h5>
                            <ul className=" list-unstyled footernav" >
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="navlinks">
                            <h5 className='nav-title'>What We Do?</h5>
                            <ul className=" list-unstyled footernav">
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfooter py-4 text-white position-absolute  w-100 ">
                <div className="container">
                    <div className="row justify-content-between align-items-center ">
                        <div className="col-md-6 pt-3 ">
                            <p className='subfooter-text text-lg-start text-center' >© Copyright 2018 Order of Kings and Queens in the Holy Lands</p>
                        </div>
                        <div className="col-md-6 icons d-flex justify-content-center  gap-5 align-items-center">
                            <BiLogoFacebookCircle size={"30px"} />
                            <span className='bg-white  rounded-pill'>
                            <BiLogoInstagramAlt size={"26px"} style={{color:"black"}} />
                            </span>
                          
                            <AiFillTwitterCircle size={"30px"} />
                            <span className='bg-white  rounded-pill'>
                            <BiLogoYoutube size={"26px"} style={{color:"black"}} /></span>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

