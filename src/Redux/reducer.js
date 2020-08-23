import { combineReducers } from "redux";
import home from "./Home/homeReducer";
import uploadReducer from "./UploadRedux/uploadReducer";
const Root = combineReducers({
  home: home,
  upload: uploadReducer,
});

export default Root;
