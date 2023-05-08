import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq `
    *[_type=='post'] {
        ...,
    } | order(_createdAt desc)
`

export default function HomePage() {
    
    /*if(previewData()) {
        return <div className="bg-green-500">Preview mode</div>
    }*/

    return (
        <div className="bg-red-500">
            <h1>Not in Preview Mode</h1>
        </div>
    );
}