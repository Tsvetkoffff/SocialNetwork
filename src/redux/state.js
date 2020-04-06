const   ADD_POST = 'ADD_POST',
        UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
        UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT',
        SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Post 1', likesCount: 45 },
                { id: 2, message: 'Post 2', likesCount: 54 },
                { id: 3, message: 'Post 3', likesCount: 67 }
            ],
            newPostText: 'Hi'
        },
    
    
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Bob' },
                { id: 2, name: 'Sara' },
                { id: 3, name: 'Jon' },
                { id: 4, name: 'Ben' }
            ],
    
            messagesData: [
                { id: 1, message: 'Fuck you' },
                { id: 2, message: 'Bla bla bla' },
                { id: 3, message: 'Yo' }
            ],

            newMessageText: ''
        },
    
    
        asideData: {
            frendsData: [
                {
                    id: 1,
                    avatar: 'https://cawa.ru/wp-content/uploads/2019/11/joaquin-phoenix-joker-smile.jpg',
                    name: 'Frend 1'
                },
                {
                    id: 2,
                    avatar: 'https://static.themoscowtimes.com/image/article_1360/bb/2019-10-3193611.png', name: 'Frend 2'
                },
                {
                    id: 3,
                    avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/Johnny-Depp-Joker-fan-art.jpg',
                    name: 'Frend 3'
                }
            ]
        }
    },

    _callSubscriber() {
        console.log('This is a mock of function')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText, 
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        } else if(action.type === SEND_MESSAGE) {
            let newMessage = {id: 4, message: this._state.messagesPage.newMessageText}
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default store