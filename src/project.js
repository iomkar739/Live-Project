import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./navigation";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";

const Project = () => {


    let projdata = useSelector(state => state.MyProject);

    let [proj, setProj] = useState(projdata.proj);
    let [projDetails, setProjDetails] = useState(projdata.projDetails);
    let [techUsed, setTechUsed] = useState(projdata.techUsed);
    let [liveURL, setLiveURL] = useState(projdata.liveURL);

    console.log(projdata);

    let dispatch = useDispatch();
    const save = () => {
        let projinfo = {
            "proj": proj,
            "projDetails": projDetails,
            "techUsed": techUsed,
            "liveURL": liveURL
        }
        let mydata = {type: "proj", info: projinfo};
        dispatch(mydata);
        swal("Save Success", "Your Basic project saved successfully", "success");
    }




    return (
        <div className="container p-5 shadow-lg"  style={{backgroundColor: "rgb(19, 3, 86)"}}>
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
                        <li className="list-group-item p-1"><Link to="/Skills" className="text-decoration-none  text-light"><i className="fa fa-desktop"> </i> My Skills </Link></li>
                        <hr />
                        <li className="list-group-item p-1" style={{ backgroundColor: "rgb(74, 93, 142)" }}><Link to="/Project" className="text-decoration-none  text-light"><i className="fa fa-suitcase"> </i> My Project </Link></li>
                        <hr />
                        <li className="list-group-item p-1"><Link to="/Experience" className="text-decoration-none  text-light"><i className="fa fa-file"> </i> Experience </Link></li>
                        <hr />
                    </ul>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header "> <h2>Enter Your Main Project Details</h2> </div>
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-xl-6">

                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Projects:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" placeholder="Project Name" className="form-control" onChange={obj => setProj(obj.target.value)} value={proj} /> </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Technologies Used:</b></p></div>
                                        <div className="col-xl-8 text-center">
                                            <textarea placeholder="Tech. names" className="form-control" onChange={obj => setTechUsed(obj.target.value)} value={techUsed} />
                                        </div>
                                    </div>

                                </div>



                                <div className="col-xl-6">

                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Project Details:</b></p></div>
                                        <div className="col-xl-8 text-center">
                                            <textarea placeholder="Project Details" className="form-control" onChange={obj => setProjDetails(obj.target.value)} value={projDetails} />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Live URL:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Enter URL" onChange={obj => setLiveURL(obj.target.value)} value={liveURL} /> </div>
                                    </div>

                                </div>

                            </div>



                        </div>
                        <div className="card-footer text-center"><button className="btn text-white" id="submit" onClick={save}> Submit Project Details </button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
