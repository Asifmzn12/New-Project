import { cards } from "./config/cards"
function Section3() {
    return (
        <div>
            <div className=" position-relative  m-0 p-0 py-lg-5 py-1 my-5">
                <div className="container borderrounded  bg-white z-2 py-lg-5 py-1 ">
                    <div className="row py-3  border-right position-relative justify-content-md-start  justify-content-lg-center align-items-md-start align-items-lg-center ">
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
                    <div className="col-md-4 position-absolute top-0 yellowbox box1 d-none d-xl-block   ">
                        <img src="yellowbox.png" className="img-fluid "></img>

                    </div>
                    <div className="col-md-4 position-absolute bottom-0 box-2 yellowbox d-none d-xl-block ">
                        <img src="yellowbox.png" className="img-fluid "></img>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Section3
