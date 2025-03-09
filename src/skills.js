import LeftNav from "./navigation";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Skills = () => {
    return(
        <div className="container shadow-lg p-5">
            <div className="row">
                <div className="col-xl-3 p-4" id="nav">
                <ul className="List-group">
                        <li className="list-group-item bg-dark text-light p-2"><h3>Quick Links</h3></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/" className="text-decoration-none  text-light"><i className="fa fa-home"> </i> Dashboard </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/basic" className="text-decoration-none  text-light"><i className="fa fa-user"> </i> My Basic </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Contact" className="text-decoration-none text-light"  ><i className="fa fa-headset"> </i> My Contact </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Education" className="text-decoration-none  text-light"><i className="fa fa-book"> </i> My Education </Link></li>
                        <hr />
                        <li className="list-group-item p-1" style={{backgroundColor: "rgb(74, 93, 142)"}}><Link to="/Skills" className="text-decoration-none  text-light"><i className="fa fa-desktop"> </i> My Skills </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Project" className="text-decoration-none  text-light"><i className="fa fa-suitcase"> </i> My Project </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Experience" className="text-decoration-none  text-light"><i className="fa fa-file"> </i> Experience </Link></li>
                        <hr />
                    </ul>
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
                        <div className="card-footer text-center"><button className="btn text-white" id="submit"> Submit Your Skillsets </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
