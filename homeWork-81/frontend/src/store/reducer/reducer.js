import {CHANGE_HANDLER, REQUEST_END, REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESS} from "../actions/actions";

const initialState = {
 shortUrl:null,
  originalLink:'',
  loading: false,
  error: null
};
const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        shortUrl: action.data,
        loading: false
      };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err
      };
    case REQUEST_END:
      return {
        ...state,
        loading: false
      };
    case CHANGE_HANDLER :
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };
    default:
      return state
  }
};
  export default  reducer;