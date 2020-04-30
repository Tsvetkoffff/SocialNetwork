const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_ISLOADING_STATUS = 'SET_ISLOADING_STATUS';
const IS_FOLLOW_FETCHING_TOGGLE = 'IS_FOLLOW_FETCHING_TOGGLE';

let initialState = {
        users: [],
        totalUsersCount: 0,
        pageSize: 15,
        currentPage: 1,
        isLoading: false,
        isFollowFetching: [2]
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
        case IS_FOLLOW_FETCHING_TOGGLE:
            return {...state, isFollowFetching: action.isFollowFetching
                ?[...state.isFollowFetching, action.userId]
                :state.isFollowFetching.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const follow = (id) => ({type: FOLLOW, id: id});
export const unfollow = (id) => ({type: UNFOLLOW, id: id});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, count});
export const setIsLoading = (isLoading) => ({type: SET_ISLOADING_STATUS, isLoading});
export const isFollowFetchingToggle = (isFollowFetching, userId) => ({type: IS_FOLLOW_FETCHING_TOGGLE, isFollowFetching, userId});

export default usersReducer;