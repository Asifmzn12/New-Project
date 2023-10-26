import { cards } from "./config/cards"
function Section3() {
    return (
        <div>
            <div className="  m-0 p-0 py-lg-5 py-1 my-5">
                <div className="container position-relative   bg-white z-2 py-lg-5 py-1 ">
                    <div className="container  ">
                        <div className="row mx-5 bg-white borderrounded py-3 position-relative  border-right  justify-content-md-start  justify-content-lg-center align-items-md-start align-items-lg-center">
                            {cards.map((cardinfo, index) => (
                                <div className="col-lg-4 col-md-6 brdr border-line  position-relative d-flex flex-column justify-content-center align-items-center" key={index}>
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
    )
}

export default Section3
