export interface Post {
    _id : string;
    _createdAt: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    body: [object];
    references: ArticleReferences;
    
    
}

export interface PostsIntro {
    _id : string;
    _createdAt: string;
    _type: 'postIntro';
    title: string;
    references: ArticleReferences;
    
    
}




type ArticleReference = {
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  }
};

type ArticleReferences = Array<ArticleReference>;

