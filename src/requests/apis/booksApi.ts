import axios from 'axios';
import { any } from 'prop-types';

let baseURL = 'https://demoqa.com';

// const { BASE_URL } = process.env
const BASE_URL = baseURL

export class Books{
    baseURL: string;

    constructor() {
        this.baseURL = BASE_URL;
    }

    async listBooks(aut: any) {
        const separator = ';';
        let url = `${baseURL}/BookStore/v1/Books`;
        let options = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        url
        };
        
        let resp = await axios(options);
        

        return resp.data.books
    }
}

