import LeftNav from "./navigation";

const Project = () => {
    return(
        <div className="container p-5 shadow-lg">
            <div className="row">
                <div className="col-xl-3 bg-secondary p-4">
                <LeftNav/>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header "> <h2>Enter Your Main Project Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Projects:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" placeholder="Project Name" className="form-control"/> </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Technologies Used:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea placeholder="Tech. names" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div>



                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Project Details:</b></p></div>
                                        <div className="col-xl-8 text-center">
                                            <textarea placeholder="Project Details" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Live URL:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Enter URL"/> </div>
                                    </div>
                                    
                                </div>

                            </div>
                            
                            

                        </div>
                        <div className="card-footer text-center"><button className="btn btn-secondary"> Submit Project Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
