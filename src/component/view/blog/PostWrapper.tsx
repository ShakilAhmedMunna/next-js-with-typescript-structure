import React from "react";
import { PostWrapperInterface } from "../../interface/PostWrapperInterface";

const PostWrapper = ({
    children,
    title,
}: PostWrapperInterface): JSX.Element => {
    return (
        <>
            <h1>{title} </h1>
            {children}
        </>
    );
};

export default PostWrapper;
