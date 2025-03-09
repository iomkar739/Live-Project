import { combineReducers } from "redux";

import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEducation from "./edureducer";
import MySkill from "./skillsreducer";
import MyProject from "./projectreducer";
import MyExperience from "./expreducer";

const Mainreducer = combineReducers({
    MyBasic, MyContact, MyEducation, MySkill, MyProject, MyExperience
})

export default Mainreducer