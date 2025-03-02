

const MyBasic = ( state, action ) => {
    let data = {
        "fullname":"",
        "dob":"", //YYYY-MM-DD
        "gender":"",
        "married":"",
        "profilestatus":"",
        "about":""
    };
    
    let basicdata = Object.assign(data, state);

    if (action.type === "basic"){
        basicdata = action.info;
    }
    return basicdata;

}

export default MyBasic;