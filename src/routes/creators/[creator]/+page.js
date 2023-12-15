import axios from 'axios';
import { PUBLIC_BACKEND_HOST } from '$env/static/public';

export async function load({ params }) {
    const response = await axios.get(`${PUBLIC_BACKEND_HOST}/api/videos?populate=*&filters[creator][id][$eq]=${params.creator}&sort[0]=title:asc`);

    return {
        videos: response.data
    };
};