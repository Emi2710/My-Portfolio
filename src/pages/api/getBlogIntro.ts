import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../client/sanity";

import { PostsIntro } from "../../../typings";

const query = groq `
    *[_type == "postIntro"] {
        ..., 
        references[] ->
    }
`
;

type Data = {
    posts: PostsIntro[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts : PostsIntro[]= await sanityClient.fetch(query);

    res.status(200).json({ posts })
}