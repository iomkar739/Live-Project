import LeftNav from "./navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const Basic = () => {

    
    let basicdata = useSelector( state=>state.MyBasic);
    
    let[name, setName] = useState(basicdata.fullname);
    let[dob, setdob] = useState(basicdata.dob);
    let[gender, setGender] = useState(basicdata.gender);
    let[married, setMarried] = useState(basicdata.married);
    let[profile, setProfile] = useState(basicdata.profilestatus);
    let[about, setAbout] = useState(basicdata.about);
    //changeBasic(basicdata);
    console.log(basicdata);


    let dispatch = useDispatch();
    const save = () => {
        let userinfo = {
            "fullname":name,
            "dob":dob,
            "gender":gender,
            "married":married,
            "profilestatus":profile,
            "about":about
        };
        let mydata = {  type:"basic",   info:userinfo   };
        dispatch(mydata);
        alert("Your Basic details saved successfully");

    }


    return(
        <div className="container bg-light shadow-lg p-5 ">
            <div className="row">
                
                    <div className="col-xl-3 p-4 bg-secondary"><LeftNav/></div>
                    <div className="col-xl-9 text-center p-5">

                     <div className="card shadow-lg border-1 mb-4 mt-2">
                        <div className="card-header "> <h2>Enter Your Basic Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Full Name:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" placeholder="Enter your full name" className="form-control"
                                        onChange={obj=>setName(obj.target.value)} value={name}/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Gender:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <select className="form-select" onChange={obj=>setGender(obj.target.value)} value={gender}> 
                                            <option> Select </option>
                                            <option> Male </option>
                                            <option> Female </option>
                                            <option> Others </option>
                                            </select> 
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Profile Status:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <select className="form-select" onChange={obj=>setProfile(obj.target.value)} value={profile}> 
                                            <option> Select </option>
                                            <option> Active </option>
                                            <option> Inactive </option>
                                            </select>    
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Date of  Birth:</b></p></div>
                                        <div className="col-xl-8 text-center"><input type="date" className="form-control"
                                        onChange={obj=>setdob(obj.target.value)} value={dob}/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Married:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <select className="form-select" onChange={obj=>setMarried(obj.target.value)} value={married}> 
                                            <option> Select </option>
                                            <option> Yes </option>
                                            <option> No </option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>About You:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea placeholder="Tell us about you" className="form-control"
                                            onChange={obj=>setAbout(obj.target.value)} value={about}/>  
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            

                        </div>
                        <div className="card-footer  text-center"><button className="btn btn-secondary" onClick={save}> Submit Basic Details </button></div>   
                    </div>   
                        
                    
                    
                    </div> 
                    
                    
                    
                
            </div>
        </div>
    )
}

export default Basic;
