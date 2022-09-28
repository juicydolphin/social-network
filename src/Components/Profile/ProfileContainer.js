import React from 'react'
import Profile from "./Profile";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = this.props.authorizedUserId
        }
        if (!userID) {
            this.props.history.push('/login')
        }
        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    componentDidMount() {

        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.router.params.userID !== prevProps.router.params.userID) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.router.params.userID} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateUserStatus} saveProfile={this.props.saveProfile} savePhoto={this.props.savePhoto}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userID,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth

})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)