import LeftNav from "./navigation";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Education = () => {


    let edudata = useSelector( state=> state.MyEducation)

    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);
    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);
    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);
    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);
    let[highestEdu,setHighestEdu] = useState(edudata.highestEdu);





    return(
        <div className="container shadow-lg p-5">
            <div className="row">
                <div className="col-xl-3 bg-secondary p-4">
                <LeftNav/>
                </div>
                <div className="col-xl-9 p-5 text-center" >
                    <div className="card border-1 shadow-lg mb-4 mt-2">
                        <div className="card-header "> <h2>Enter Your Education Details</h2> </div>
                        <div className="card-body bg-light"> 
                            <div className="row">    
                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Highest Education:</b></p></div>
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Highest Education"/> </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-xl-4 text-center p-1"><p><b>Grade:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <select className="form-select">
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
                                        <div className="col-xl-8 text-center"> <input type="text" className="form-control" placeholder="Enter City"/> </div>
                                    </div>
                                    
                                </div>



                                <div className="col-xl-6">
                                    
                                    <div className="row mb-2 mt-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>Passing Year:</b></p></div>
                                        <div className="col-xl-8 text-center"><input type="number" className="form-control" placeholder="YYYY"/></div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-xl-4 text-center p-1"><p><b>College / University:</b></p></div>
                                        <div className="col-xl-8 text-center"> 
                                            <textarea className="form-control" placeholder="Enter your college/university"/> 
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            
                            

                        </div>
                        <div className="card-footer text-center"><button className="btn btn-secondary"> Submit Education Details </button></div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
