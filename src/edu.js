import LeftNav from "./navigation";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Education = () => {


    let edudata = useSelector( state=> state.MyEducation)

    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);
    let[grade,setGrade] = useState(edudata.grade);
    let[city,setCity] = useState(edudata.city);
    let[passingYear,setPassingYear] = useState(edudata.passingYear);
    let[clg,setClg] = useState(edudata.clg);

    console.log(edudata);


    let dispatch = useDispatch();
    const save = () => {
        let eduinfo = {
            "highestEdu":highestEdu,
            "grade":grade, 
            "city":city,
            "passingYear":passingYear,
            "clg":clg,
        };
        let mydata = { type:"edu", info:eduinfo};
        dispatch(mydata);
        swal("Save Success","Your Education details saved successfully","success");
    }



    return(
        <div className="container shadow-lg p-5"  style={{backgroundColor: "rgb(19, 3, 86)"}}>
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
                        <li className="list-group-item p-1" style={{backgroundColor: "rgb(74, 93, 142)"}}><Link to="/Education" className="text-decoration-none  text-light"><i className="fa fa-book"> </i> My Education </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Skills" className="text-decoration-none  text-light"><i className="fa fa-desktop"> </i> My Skills </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Project" className="text-decoration-none  text-light"><i className="fa fa-suitcase"> </i> My Project </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Experience" className="text-decoration-none  text-light"><i className="fa fa-file"> </i> Experience </Link></li>
                        <hr />
                    </ul>
                </div>
                <div className="col-xl-9 p-5 text-center" >
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header "> <h2>Enter Your Education Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Highest Education:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Highest Education" onChange={obj=>setHighestEdu(obj.target.value)} value={highestEdu}/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Grade:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <select className="form-select" onChange={obj=>setGrade(obj.target.value)} value={grade}>
                                                    <option> Select </option>
                                                    <option> A </option>
                                                    <option> B </option>
                                                    <option> C </option>
                                                    <option> D </option>
                                                    <option> F </option>
                                                </select>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>City:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Enter City" onChange={obj=>setCity(obj.target.value)} value={city}/> </div>
                                    </div>
                                    
                                </div>



                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Passing Year:</b></p></div>
                                        <div className="col-xl-8 text-center"><input type="number" className="form-control" placeholder="YYYY" onChange={obj=>setPassingYear(obj.target.value)} value={passingYear}/></div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>College / University:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea className="form-control" placeholder="Enter your college/university" onChange={obj=>setClg(obj.target.value)} value={clg}/> 
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            
                            

                        </div>
                        <div className="card-footer text-center"><button className="btn text-white" id="submit" onClick={save}> Submit Education Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
