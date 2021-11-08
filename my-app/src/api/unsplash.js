import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gIDAvWr7UcnVA8mWRdrX1H3MT71iSQYnxjc83dH3hEI'
    }
});