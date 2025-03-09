

const MyEducation = (state,action ) => {
    let data = {
        "highestEdu":"",
        "grade":"", 
        "city":"",
        "passingYear":"",
        "clg":"",
        
    };

    let edudata = Object.assign(data, state);

    if (action.type === "edu"){
        edudata = action.info;
    }
    return edudata;

}

export default MyEducation;