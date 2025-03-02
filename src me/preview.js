import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FinalPreview = () => {
    let basicdata = useSelector( state=>state.MyBasic);
    let contactdata = useSelector( state=> state.MyContact);
    
    
    
    return(
        <div className="container mt-4">
            <div className="row">
                
                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"> <h4>Basic Details</h4> </div>
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
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/basic" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"> <h4>Contact Details</h4> </div>
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
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/Contact" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"><h4> Education Details</h4> </div>
                        <div className="card-body "> Education will come </div>
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/Education" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                        
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"> <h4>Skill Details </h4></div>
                        <div className="card-body "> Skill will come </div>
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/Skills" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                        
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"><h4> Project Details</h4> </div>
                        <div className="card-body "> Project will come </div>
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/Project" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                        
                    </div>
                </div>

                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-dark"> <h4>Experience Details</h4> </div>
                        <div className="card-body "> Experience will come </div>
                        <div className="card-footer bg-secondary text-white"> 
                            <Link to="/Experience" className="text-light text-decoration-none"> <i className="fa fa-edit"></i> Edit </Link>    
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="col-xl-12 text-center mb-4">
                    <button className="btn btn-danger"> Submit My Details </button>
                </div>
            </div>
        </div>

        
    )
}

export default FinalPreview