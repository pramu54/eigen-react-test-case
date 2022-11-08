export type articleType = {
    status: string;
    totalResults: number;
    articles: articlesType[];
};

export type articlesType = {
    source: sourceType;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export type sourceType = {
    id: string;
    name: string;
}