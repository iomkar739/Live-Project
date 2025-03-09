import LeftNav from "./navigation";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Experience = () => {

    let expdata = useSelector(state => state.MyExperience);

    let[totalExp,setTotalExp] = useState(expdata.totalExp);
    let[expDetail,setExpDetail] = useState(expdata.expDetail);

    console.log(expdata);

    let dispatch = useDispatch();
    const save=()=>{
        let datainfo = {
            totalExp : "totalExp",
            expDetail : "expDetail"
        };

        let datapass = {type:"exp", info:datainfo};

        dispatch(datapass);
        swal("Save Success","Your Experience details saved successfully","success");
        
        

    }
    
    return(
        
        <div className="container p-5 shadow-lg">
            <div className="row">
                <div className="col-xl-3  p-4" id="nav">
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
                        <li className="list-group-item p-1"><Link to="/Skills" className="text-decoration-none  text-light"><i className="fa fa-desktop"> </i> My Skills </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Project" className="text-decoration-none  text-light"><i className="fa fa-suitcase"> </i> My Project </Link></li>
                        <hr />
                        <li className="list-group-item p-1" style={{backgroundColor: "rgb(74, 93, 142)"}}><Link to="/Experience" className="text-decoration-none  text-light"><i className="fa fa-file"> </i> Experience </Link></li>
                        <hr />
                    </ul>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header"> <h2>Enter Your Experience Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-12 text-center">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Total Experience:</b></p></div>
                                        <div className="col-xl-7 text-center"> <input type="number" placeholder="Total no. of experience" className="form-control" onChange={obj=>setTotalExp(obj.target.value)} value={totalExp}/> </div>
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
                        <div className="card-footer text-center"><button className="btn text-white" id="submit"> Submit Experience Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
