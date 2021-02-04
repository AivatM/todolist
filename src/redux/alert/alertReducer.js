const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

let initialState = {
  visible: true,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        ...state,
        visible: true,
      };
    }
    case HIDE_ALERT: {
      debugger;
      return {
        ...state,
        visible: false,
      };
    }
    default:
      return state;
  }
};
const showAlertCreator = () => {
  return { type: SHOW_ALERT };
};
const hideAlertCreator = () => {
  return { type: HIDE_ALERT };
};

export const showAlert = (text, type = "warning") => (dispatch) => {
  dispatch(showAlertCreator(text, type));
};
export const hideAlert = () => (dispatch) => {
  dispatch(hideAlertCreator());
};
export default alertReducer;
