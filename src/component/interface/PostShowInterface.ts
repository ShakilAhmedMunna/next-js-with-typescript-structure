interface DateInterface {
    create_at: string;
}

export interface ResponseInterface {
    date: DateInterface;
}

export interface InfoInterface {
    id: number;
    title: string;
    body: string;
    response: {
        date: {
            create_at: string;
        };
    };
}

export interface PostShowInterface {
    postList: InfoInterface[];
}
