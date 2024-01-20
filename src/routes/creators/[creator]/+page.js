import { databases } from '$lib/appwrite.js';
import { Query } from 'appwrite';

export async function load({ params }) {
    let promise = await databases.listDocuments(
        "videos",
        "65a9b15650d2d14667ec",
        [
            Query.equal("$id", params.creator),
        ]
    );

    return {
        videos: promise.documents[0].videos,
        creator: promise.documents[0]
    };
};