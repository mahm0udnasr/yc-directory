import React from 'react'
import {client} from "@/sanity/lib/client";
import {STARTUP_BY_SLUG_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";

export const experimental_ppr = true;

const page = async ({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug;
    const post = await client.fetch(STARTUP_BY_SLUG_QUERY, {slug});
    if(!post) {
        return notFound();
    }
    return (
        <>
        <h1 className="text-3xl">{post.title}</h1>
        </>
    )
}

export default page