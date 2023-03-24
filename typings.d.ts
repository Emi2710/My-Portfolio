export interface Post {
    _id : string;
    _createdAt: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    body: [object];
    articlesRelated: {
        title: string;
        publishedAt: string;
        slug: {
        current: string;
    };
    }
    
}


