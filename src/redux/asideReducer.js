let initialState = {
    friendsData: [
        {
            id: 1,
            avatar: 'https://cawa.ru/wp-content/uploads/2019/11/joaquin-phoenix-joker-smile.jpg',
            name: 'Frend 1'
        },
        {
            id: 2,
            avatar: 'https://static.themoscowtimes.com/image/article_1360/bb/2019-10-3193611.png',
            name: 'Frend 2'
        },
        {
            id: 3,
            avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/Johnny-Depp-Joker-fan-art.jpg',
            name: 'Frend 3'
        }
    ]
};

const asideReducer = (state = initialState, action) => {
            return state;
};


export default asideReducer;