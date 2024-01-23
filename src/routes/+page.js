import { databases } from '$lib/appwrite.js';

export async function load() {
    const videocollection = await databases.listDocuments('videos', '65a9b15650d2d14667ec');

    return {
        creators: videocollection.documents
    };
}