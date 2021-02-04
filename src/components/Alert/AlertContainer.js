import Alert from "./Alert";
import { connect } from "react-redux";
import { showAlert, hideAlert } from "../../redux/alert/alertReducer";

const mapStateToProps = (state) => {
  return {
    visible: state.alert.visible,
  };
};
const AlertContainer = connect(mapStateToProps, {
  showAlert,
  hideAlert,
})(Alert);

export default AlertContainer;
