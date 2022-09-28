import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hello everyone', likes: '13'},
                {message: 'Jopa', likes: '228'},
                {message: 'Cherema na svyazi', likes: '14'},
                {message: 'AK47 RULEZ', likes: '1488'},
                {message: 'Hello everyone', likes: '13'},
            ],
            newPostText: ''
        },
        messengerPage: {
            dialogs: [
                {name: 'Kirill', id: '1'},
                {name: 'Danil', id: '2'},
                {name: 'Vlad', id: '3'},
                {name: 'Nikita', id: '4'},
            ],
            messages: [
                {message: 'Hi'},
                {message: 'Lol'},
                {message: 'Kek'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerReducer(this._state.messengerPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.store = store