import { databases } from '$lib/appwrite.js';
import { Query } from 'appwrite';

export async function load({ params }) {
    let creator = params.creator;

    let search = await databases.listDocuments(
        "videos",
        "65a9b15650d2d14667ec",
        [
            Query.equal("name", params.creator),
        ]
    );

    if (search.documents.length != 0) creator = search.documents[0].$id;

    let promise = await databases.listDocuments(
        "videos",
        "typh",
        [
            Query.equal("creators", creator),
            Query.orderDesc('createdDate'),
            Query.limit(100), // TODO: Pagination
        ]
    );

    return {
        videos: promise.documents,
        creator: promise.documents[0].creators
    };
};