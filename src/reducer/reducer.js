import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-spaces.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
