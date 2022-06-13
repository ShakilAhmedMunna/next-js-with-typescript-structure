import React from "react";
import { PostShowInterface } from "../../interface/PostShowInterface";

/**
 * This is the post show page
 * @return {JSX.Element} : jsx code for post show page
 * @param {Array} postList
 */
const PostShow = ({ postList = [] }: PostShowInterface): JSX.Element => {
    return (
        <>
            <h1>List will be show </h1>
        </>
    );
};

export default PostShow;
