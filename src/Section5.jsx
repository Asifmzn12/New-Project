import "./assets/css/Section5.css"
function Section5() {
    return (
        <div className="">
            <div className="container py-lg-5 py-1">
                <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                        <div className=" d-flex flex-column gap-2">
                            <h5 className="top-heading">WHERE IT ALL BEGAN</h5>
                            <h4 className="sub-heading">Become a member</h4>
                            <p className="content">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className="buttons d-flex flex-wrap gap-4 my-2 my-md-4" >
                            <div className="col-xl-4 col-lg-6">
                                <button className="memberbtn px-5">Membership</button>
                            </div>
                            <div className="col-xl-4 col-lg-5" >
                                <button className="rounded-pill  learnMore">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  py-3">
                        <img src="section5.png" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
