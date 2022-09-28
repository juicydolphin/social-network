import {sendMessageCreator} from "../../redux/messenger-reducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {

            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger);