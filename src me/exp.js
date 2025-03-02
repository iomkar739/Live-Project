import LeftNav from "./navigation";

const Experience = () => {
    return(
        <div className="container p-5 shadow-lg">
            <div className="row">
                <div className="col-xl-3  bg-secondary p-4">
                <LeftNav/>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header"> <h2>Enter Your Experience Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-12 text-center">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Total Experience:</b></p></div>
                                        <div className="col-xl-7 text-center"> <input type="number" placeholder="Total no. of experience" className="form-control"/> </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Experience Details:</b></p></div>
                                        <div className="col-xl-7 text-center"> 
                                            <textarea placeholder="Explain briefly about your experience" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>  
                        <div className="card-footer text-center"><button className="btn btn-secondary"> Submit Experience Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
