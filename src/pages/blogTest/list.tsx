import React from "react";
import PostShow from "../../component/view/blog/PostShow";

const List = () => {
    const posts: Array<{
        id: number;
        title: string;
        body: string;
        response: {
            date: {
                create_at: string;
            };
        };
    }> = [
        {
            id: 1,
            title: "PATTERN FORMAT",
            body: "A blank line matches no files, so it can serve as a separator for readability",
            response: {
                date: {
                    create_at: "11-06-2022",
                },
            },
        },
        {
            id: 2,
            title: "CONFIGURATION",
            body: "The optional configuration variable core.excludesFile indicates a path to a file containing patterns of file names to exclude",
            response: {
                date: {
                    create_at: "12-06-2022",
                },
            },
        },
    ];

    return (
        <>
            <div>
                <h1>Hello </h1>
                <PostShow postList={posts}></PostShow>
            </div>
        </>
    );
};

export default List;