

const MyExperience = (state, action) => {
    let data = {
        totalExp: "",
        expDetail: ""
    };
    let expdata = Object.assign(data, state);

    if (action.type === "exp") {
        expdata = action.info;
    }
    return expdata;
}

export default MyExperience;