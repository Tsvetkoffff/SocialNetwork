const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        default:
            return state;
    }
};

export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});

export default usersReducer;