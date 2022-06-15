import React from "react";
import { PostShowInterface } from "../../interface/PostShowInterface";

/**
 * This is the post show page
 * @return {JSX.Element} : jsx code for post show page
 * @param {Array} postList
 */
const PostShow = ({ postList }: PostShowInterface): JSX.Element => {
    const mappingPostList = () => {
        return postList.map(
            (
                post,
                index: number
            ) => {
                return (
                    <div key={index}>
                        <h2>{post.id + ". " + post.title}</h2>
                        <p>{post.body}</p>
                        <small>{post.response.date.create_at}</small>
                    </div>
                );
            }
        );
    };

    return (
        <>
            <h5>Posts</h5>
            {mappingPostList()}
        </>
    );
};

export default PostShow;
