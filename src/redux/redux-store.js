import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    messengerPage: messengerReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


window.store = store
    export default store