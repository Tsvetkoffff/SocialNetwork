export const getProfileSelector = (state) => {
    return state.profile
};
export const getUserIdSelector = (state) => {
    return state.authReducer.id
};
export const getPostsDataSelector = (state) => {
    return state.profile.postsData
};
export const getNewPostTextSelector = (state) => {
    return state.profile.newPostText
};
export const getUsersSelector = (state) => {
    return state.usersPage.users
};
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
};
export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
};
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
};
export const getIsLoadingSelector = (state) => {
    return state.usersPage.isLoading
};
export const getIsFollowFetchingSelector = (state) => {
    return state.usersPage.isFollowFetching
};
