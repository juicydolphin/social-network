import './App.css';

import Sidebar from './Components/Sidebar/Sidebar'
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import React, {Component, Suspense} from "react";
import {connect} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

const MessengerContainer = React.lazy(() => import('./Components/Messenger/MessengerContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))
const Login = React.lazy(() => import('./Components/Login/Login'))

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>

                <HeaderContainer/>
                <Sidebar/>
                <div class="app-wrapper-content">
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/" element={<ProfileContainer/>}/>
                            <Route path="/messenger" element={<MessengerContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </Suspense>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
