import { databases } from '$lib/appwrite.js';

export async function load() {
    let creators = [];
    const videocollection = await databases.listDocuments('videos', '65a9b15650d2d14667ec');

    console.log(videocollection);

    videocollection.documents.forEach(creator => {
        creators.push({ name: creator.name, id: creator.$id });
    });

    return {
        creators: creators
    };
}