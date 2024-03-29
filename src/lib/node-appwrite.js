import { Client, Databases } from 'node-appwrite';
import { PUBLIC_API_ENDPOINT, PUBLIC_PROJECT_ID } from '$env/static/public';
import { PRIVATE_APPWRITE_KEY } from '$env/static/private';

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint(PUBLIC_API_ENDPOINT) // Your API Endpoint
    .setProject(PUBLIC_PROJECT_ID) // Your project ID
    .setKey(PRIVATE_APPWRITE_KEY) // Your secret API key
    ;

export { databases };