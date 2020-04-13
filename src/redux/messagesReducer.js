const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT',
    SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Ben'}
    ],

    messagesData: [
        {id: 1, message: 'Fuck you'},
        {id: 2, message: 'Bla bla bla'},
        {id: 3, message: 'Yo'}
    ],

    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        case SEND_MESSAGE:
            let newMessage = {id: 4, message: state.newMessageText};
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default messagesReducer;