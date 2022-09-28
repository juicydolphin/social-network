const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    ]
}

export const messengerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messengerReducer

