import axios from 'axios';

export async function load({ params }) {
    const response = await axios.get(`http://100.109.118.69:1337/api/videos?populate=*&filters[creator][id][$eq]=${params.slug}&sort[0]=title:asc`);

    return {
        videos: response.data
    };
};