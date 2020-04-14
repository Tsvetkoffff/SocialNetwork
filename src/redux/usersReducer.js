const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            userId: 1,
            followed: true,
            photoUrl: 'https://bilder.bild.de/fotos-skaliert/von-kritik-und-kinopublikum-gleichermassen-gefeiert-joaquin-phoenix-als-arthur-fleck-201240987-66097266/4,w=1280,c=0.bild.jpg',
            userName: 'Joker',
            userStatus: 'Killing people, just for fun)',
            userLocation: {cityName: 'Gotham', country: 'Earth'}
        },
        {
            userId: 2,
            followed: false,
            photoUrl: 'https://bilder.bild.de/fotos-skaliert/von-kritik-und-kinopublikum-gleichermassen-gefeiert-joaquin-phoenix-als-arthur-fleck-201240987-66097266/4,w=1280,c=0.bild.jpg',
            userName: 'Joker it`s me',
            userStatus: 'Killing people, just for fun)',
            userLocation: {cityName: 'Gotham', country: 'Earth'}
        },
        {
            userId: 3,
            followed: true,
            photoUrl: 'https://bilder.bild.de/fotos-skaliert/von-kritik-und-kinopublikum-gleichermassen-gefeiert-joaquin-phoenix-als-arthur-fleck-201240987-66097266/4,w=1280,c=0.bild.jpg',
            userName: 'Joker really Joker',
            userStatus: 'Killing people, just for fun)',
            userLocation: {cityName: 'Gotham', country: 'Earth'}
        },
        {
            userId: 4,
            followed: false,
            photoUrl: 'https://bilder.bild.de/fotos-skaliert/von-kritik-und-kinopublikum-gleichermassen-gefeiert-joaquin-phoenix-als-arthur-fleck-201240987-66097266/4,w=1280,c=0.bild.jpg',
            userName: 'Joker Just Joker',
            userStatus: 'Killing people, just for fun)',
            userLocation: {cityName: 'Gotham', country: 'Earth'}
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, action.users]};
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.userId === action.userId) {
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
export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});

export default usersReducer;