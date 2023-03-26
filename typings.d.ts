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




type ArticleReference = {
  title: string;
  slug: {
    current: string;
  }
};

type ArticleReferences = Array<ArticleReference>;

