import LeftNav from "./navigation";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";



const Contact = () => {

    let contactdata = useSelector(state=>state.MyContact);
    
    let[mobile,setMobile] = useState(contactdata.mobile);
    let[email,setEmail] = useState(contactdata.email);
    let[localAdd,setLocalAdd] = useState(contactdata.localAdd);
    let[permanentAdd,setPermanentAdd] = useState(contactdata.permanentAdd);
    let[referenceAdd,setReferenceAdd] = useState(contactdata.referenceAdd);
    
    console.log(contactdata);



    let dispatch = useDispatch();
    const save = () => {
        let userinfo = {
            "mobile":mobile,
            "email":email,
            "localAdd":localAdd,
            "permanentAdd":permanentAdd,
            "referenceAdd":referenceAdd
        };
        let mydata = {  type:"contact",     info:userinfo   };
        dispatch(mydata);
        alert("Your contact details saved successfully");

    }



    return(
        <div className="container p-5 shadow-lg">
            <div className="row">
                <div className="col-xl-3 bg-secondary p-4">
                <LeftNav/>
                </div>
                <div className="col-xl-9 text-center p-5">
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header"> <h2>Enter Your Contact Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Mobile No.:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="number" placeholder="mobile no." className="form-control"
                                        onChange = {obj => setMobile(obj.target.value)} value={mobile}/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Local Address:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea placeholder="Enter Local Address" className="form-control"
                                            onChange = {obj=>setLocalAdd(obj.target.value)} value={localAdd}/>
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Reference Address:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea placeholder="Reference Address" className="form-control"
                                            onChange = {obj=>setReferenceAdd(obj.target.value)} value={referenceAdd}/>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Email:</b></p></div>
                                        <div className="col-xl-8 text-center"><input type="email" className="form-control" placeholder="Email-id"
                                        onChange = {obj=> setEmail(obj.target.value)} value={email}/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Permanent Address:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea placeholder="Permanent Address" className="form-control"
                                            onChange = {obj=>setPermanentAdd(obj.target.value)} value={permanentAdd}/>
                                        </div>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                            
                            

                        </div>
                        <div className="card-footer text-center"><button className="btn btn-secondary" onClick={save}> Submit Contact Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
