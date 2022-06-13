import React from "react";
import Head from "next/head";
import Addition from "../component/view/calculator/Addition";
import PostWrapper from "../component/view/blog/PostWrapper";


/**
 * this is the home page
 * @return {JSX.Element} : jsx code for home page
 */
const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="Meta description content goes here." />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>


      <h1>Hello </h1>
      <PostWrapper title={"Addition 2 number"}>
        <Addition firstNumber={12} secondNumber={8} />
      </PostWrapper>

    </>
  );
};

export default Home;