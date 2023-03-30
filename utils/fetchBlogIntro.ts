import { PostsIntro } from "../typings";

export const fetchBlogIntro = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getBlogIntro`);

    const data = await res.json();
    const posts : PostsIntro[] = data.posts;

    return posts;
}