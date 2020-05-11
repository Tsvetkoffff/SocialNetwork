import {addPost} from "../../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {getNewPostTextSelector, getPostsDataSelector} from "../../../../utilities/selectors";

let mapStateToProps = (state) => {
    return {
        postsData: getPostsDataSelector(state),
        newPostText: getNewPostTextSelector(state)
    }
};

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer