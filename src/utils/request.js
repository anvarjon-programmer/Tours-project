import axios from "axios";

export const request = axios.create({
    baseURL: 'https://www.course-api.com/',
    timeout: 13000,
})