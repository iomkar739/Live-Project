const MySkill = (state, action) => {
    let data = {
        "skills":""
    };

    let skilldata = Object.assign(data,state)

    if(action.type === "skill"){
        skilldata = action.info;
    }
    return skilldata;
}

export default MySkill;