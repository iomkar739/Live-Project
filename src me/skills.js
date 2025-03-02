import LeftNav from "./navigation";

const Skills = () => {
    return(
        <div className="container shadow-lg p-5">
            <div className="row">
                <div className="col-xl-3 bg-secondary p-4">
                <LeftNav/>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header"> <h2>Enter Your Skillsets</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-12 text-center">
                                    
                                    <div className="row mb-4 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Key Skills:</b></p></div>
                                        <div className="col-xl-7 text-center"> 
                                            <textarea className="form-control" placeholder="Enter your key skills..."/> 
                                        </div>
                                    </div>

                                    
                                    
                                </div>
                            </div>
                        </div>  
                        <div className="card-footer text-center"><button className="btn btn-secondary"> Submit Your Skillsets </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
