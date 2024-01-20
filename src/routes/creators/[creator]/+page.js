import { databases } from '$lib/appwrite.js';
import { Query } from 'appwrite';

export async function load({ params }) {
    let promise = await databases.listDocuments(
        "videos",
        "typh",
        [
            Query.equal("creators", params.creator),
            Query.orderDesc('createdDate'),
            Query.limit(100), // TODO: Pagination
        ]
    );

    return {
        videos: promise.documents,
        creator: promise.documents[0].creators
    };
};