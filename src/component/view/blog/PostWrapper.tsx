import React from "react";

interface PostWrapperInterface {
  children?: JSX.Element[] | JSX.Element,
  title?: string

}

const PostWrapper = ({ children, title }: PostWrapperInterface) => {

  return (
    <>
      <h1>{title} </h1>
      {children}
    </>
  );
};

export default PostWrapper;