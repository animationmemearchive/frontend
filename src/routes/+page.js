import axios from 'axios';
import { env } from '$env/static/public';

export async function load() {
    const response = await axios.get(`${env.PUBLIC_BACKEND_HOST}/api/creators`);

    return {
        creators: response.data
    };
}