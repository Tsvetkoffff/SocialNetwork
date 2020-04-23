const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_ISLOADING_STATUS = 'SET_ISLOADING_STATUS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 15,
    currentPage: 1,
    isLoading: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users};
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case SET_ISLOADING_STATUS:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
};

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const followAC = (id) => ({type: FOLLOW, id: id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCountAC = (count) => ({type: SET_USERS_COUNT, count});
export const setIsLoadingAC = (isLoading) => ({type: SET_ISLOADING_STATUS, isLoading});

export default usersReducer;