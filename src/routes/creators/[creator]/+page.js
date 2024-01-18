import { databases } from '$lib/appwrite.js';

export async function load({ params }) {
    let promise = await databases.listDocuments(
        "videos",
        params.creator
    );

    console.log(promise);

    return {
        videos: promise.documents,
        creator: params.creator
    };
};