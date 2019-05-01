import {combineReducers} from "redux"
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import moduleTaskReducer from "./moduleTaskReducer";

export default combineReducers({

errors:errorsReducer,
project_task: projectTaskReducer,
module_task: moduleTaskReducer

});