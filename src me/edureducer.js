

const MyEducation = () => {
    let data = {
        "highestEdu":"mtech",
        "grade":"A", 
        "City":"BLR",
        "passingYear":"2020",
        "Clg":"IIT",
        
    };

    let edudata = Object.assign(data, state);

    if (action.type === "edu"){
        edudata = action.info;
    }
    return edudata;

}

export default MyEducation;