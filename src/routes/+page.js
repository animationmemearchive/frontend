import axios from 'axios';
import { PUBLIC_BACKEND_HOST } from '$env/static/public';

export async function load() {
    const response = await axios.get(`${PUBLIC_BACKEND_HOST}/api/creators`);

    return {
        creators: response.data
    };
}