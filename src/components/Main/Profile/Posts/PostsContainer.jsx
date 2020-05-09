import {addPost} from "../../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer