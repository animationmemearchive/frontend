import { databases } from '$lib/node-appwrite.js';

export async function load() {
    let creators = [];
    const videocollection = await databases.listCollections('videos');

    videocollection.collections.forEach(creator => {
        creators.push(creator.name);

    });

    return {
        creators: creators
    };
}