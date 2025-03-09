const MyProject = ( state, action) => {
    let data = {
        "proj":"",
        "projDetails":"",
        "techUsed":"",
        "liveURL":""
    };

    let projdata = Object.assign(data, state)
    if (action.type === "proj"){
        projdata = action.info;
    }
    return projdata;
}

export default MyProject;