import axios from 'axios';


export async function load() {
    const response = await axios.get('http://100.109.118.69:1337/api/creators');

    return {
        creators: response.data
    };
}