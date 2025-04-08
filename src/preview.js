import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

const FinalPreview = () => {
    let basicdata = useSelector(state => state.MyBasic);
    let contactdata = useSelector(state => state.MyContact);
    let edudata = useSelector(state => state.MyEducation);
    let skilldata = useSelector(state => state.MySkill);
    let projdata = useSelector(state => state.MyProject)
    let expdata = useSelector(state => state.MyExperience)


    

    
    
    const save1 = () => {
        let mydata = {
            "basic":basicdata,
            "edu":edudata,
            "contact":contactdata,
            "skill":skilldata,
            "exp":expdata,
            "project":projdata
        };
        console.log(mydata);

        let url = "http://localhost:1234/userapi";

        let postdata = {
            headers:{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify(mydata)
        };

        fetch(url, postdata)
        .then(res=>res.json())
        .then(info=>{
            swal("Details Submitted", "Details Submitted to server...","success");
            
            setTimeout(()=>{window.location.reload()},4000);
             // it refresh the page after 4 sec.
           //setTimeout(()=>{window.location.reload()}, 3000);
        })

    }








    const save = () => {
        let mydata = {
            "basic":basicdata,
            "edu":edudata,
            "contact":contactdata,
            "skill":skilldata,
            "exp":expdata,
            "project":projdata
        };
        console.log(mydata);

        let url = "https://cybotrix.com/liveapi/api/save";

        let postdata = {
            headers:{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify({"details":mydata})
        };

        fetch(url, postdata)
        .then(res=>res.text())
        .then(info=>{
            swal("Profile Submitted", "Your Profile Submitted, We will contact you soon...","success");
            
            setTimeout(()=>{window.location.reload()},4000);
             // it refresh the page after 4 sec.
           //setTimeout(()=>{window.location.reload()}, 3000);
        })

    }



    return (
        <div className="container mt-4 mb-4 p-3" style={{ backgroundColor: "rgb(19, 3, 86)" }} >
            <div className="row">
                <h1 className="text-center text-light"> PREVIEW <hr/></h1>
                <div className="col-xl-6 mb-5 mt-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"> <h4>Basic Details</h4> </div>
                        <div className="card-body ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Full Name: </td>
                                        <td> {basicdata.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td> Date of Birth: </td>
                                        <td> {basicdata.dob}</td>
                                    </tr>
                                    <tr>
                                        <td> Gender: </td>
                                        <td> {basicdata.gender}</td>
                                    </tr>
                                    <tr>
                                        <td> Married: </td>
                                        <td> {basicdata.married}</td>
                                    </tr>
                                    <tr>
                                        <td> Profile Status: </td>
                                        <td> {basicdata.profilestatus}</td>
                                    </tr>
                                    <tr>
                                        <td> About: </td>
                                        <td> {basicdata.about}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/basic" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5 mt-3">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"> <h4>Contact Details</h4> </div>
                        <div className="card-body ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Mobile No.:</td>
                                        <td>{contactdata.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td>Email ID:</td>
                                        <td>{contactdata.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Local Address:</td>
                                        <td>{contactdata.localAdd}</td>
                                    </tr>
                                    <tr>
                                        <td>Permanent Address:</td>
                                        <td>{contactdata.permanentAdd}</td>
                                    </tr>
                                    <tr>
                                        <td>Reference Address:</td>
                                        <td>{contactdata.referenceAdd}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/Contact" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"><h4> Education Details</h4> </div>
                        <div className="card-body ">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Highest Education: </td>
                                        <td>{edudata.highestEdu}</td>
                                    </tr>
                                    <tr>
                                        <td> Grade: </td>
                                        <td>{edudata.grade}</td>
                                    </tr>
                                    <tr>
                                        <td> City: </td>
                                        <td>{edudata.city}</td>
                                    </tr>
                                    <tr>
                                        <td> Passing Year: </td>
                                        <td>{edudata.passingYear}</td>
                                    </tr>
                                    <tr>
                                        <td> College / University: </td>
                                        <td>{edudata.clg}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/Education" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>

                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"> <h4>Skill Details </h4></div>
                        <div className="card-body ">
                            <tbody><tr>
                                <td>Skills: </td>
                                <td>{skilldata.skills}</td>
                            </tr></tbody>
                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/Skills" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>

                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"><h4> Project Details</h4> </div>
                        <div className="card-body ">
                            <tbody><tr>
                                <td>Projects: </td>
                                <td>{projdata.proj}</td>
                            </tr>
                            <tr>
                                <td>Projects Details: </td>
                                <td>{projdata.projDetails}</td>
                            </tr>
                            <tr>
                                <td>Technologies Used: </td>
                                <td>{projdata.techUsed}</td>
                            </tr>
                            <tr>
                                <td>Live URL: </td>
                                <td>{projdata.liveURL}</td>
                            </tr></tbody>
                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/Project" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>

                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header text-light" id="nav"> <h4>Experience Details</h4> </div>
                        <div className="card-body ">
                        <tbody><tr>
                                <td>Total Experience: </td>
                                <td>{expdata.totalExp}</td>
                            </tr>
                            <tr>
                                <td>Experience Details: </td>
                                <td>{expdata.expDetail}</td>
                            </tr></tbody>
                        </div>
                        <div className="card-footer text-white" id="submit">
                            <Link to="/Experience" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>
                        </div>

                    </div>
                </div>


                <div className="col-xl-12 text-center mb-4">
                    <button className="btn btn-danger" onClick={save}> Submit My Details </button>
                </div>
            </div>
        </div>



    )
}

export default FinalPreview