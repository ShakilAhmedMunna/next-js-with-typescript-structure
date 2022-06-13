import React from "react";
import Head from "next/head";
import Addition from "../component/view/calculator/Addition";
import PostWrapper from "../component/view/blog/PostWrapper";

interface HomeInterface {
  pageTitle: string,
  descriptionContent: string,
  postTitle: string
}

/**
 * this is the home page
 * @return {JSX.Element} : jsx code for home page
 */
const Home = ({ pageTitle, descriptionContent, postTitle }: HomeInterface): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content={descriptionContent} />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <PostWrapper title={postTitle}>
        <Addition firstNumber={12} secondNumber={8} />
      </PostWrapper>

    </>
  );
};

/**
 *
 * @param context
 */

/**
 *
 * @param {any} context
 */
export async function getServerSideProps(context: any) {

  return {
    props: {
      pageTitle: "This is a demo",
      descriptionContent: "Meta description content goes here.",
      postTitle: "Addition 2 number",
    },
  };

}

export default Home;