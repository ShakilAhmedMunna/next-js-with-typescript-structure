import React, { useState } from "react";
import Head from "next/head";
import Addition from "../component/view/calculator/Addition";
import PostWrapper from "../component/view/blog/PostWrapper";
import OnClickTest from "../component/view/blog/OnClickTest";
import {HomeInterface} from "../component/interface/HomeInterface";

/**
 * this is the home page
 * @return {JSX.Element} : jsx code for home page
 */
const Home = ({
    pageTitle,
    descriptionContent,
    postTitle,
}: HomeInterface): JSX.Element => {
    const [changeNumber, setChangeNumber] = useState(0);

    const handleCallBackData = (value: number) => {
        setChangeNumber(() => value);
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta property="og:title" content="My page title" key="title" />
                <meta name="description" content={descriptionContent} />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <PostWrapper title={postTitle}>
                <h3>Change number {changeNumber}</h3>
                <OnClickTest backHandleDataCallback={handleCallBackData} />
                <Addition firstNumber={changeNumber} secondNumber={8} />
            </PostWrapper>
        </>
    );
};

/**
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
