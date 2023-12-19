import axios from 'axios';

let baseURL = 'https://demoqa.com';

// const { BASE_URL } = process.env
const BASE_URL = baseURL

export class Login{
    baseURL: string;

    constructor() {
        this.baseURL = BASE_URL;
    }

    async loginToSite(userName: any, userPwd: any) {
        const separator = ';';
        let url = `${baseURL}/Account/v1/generatetoken`;
        const data = { 
            'userName': userName,
            'password': userPwd
        };
        let options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data,
        url
        };

        let resp = await axios(options);

        return resp.data
    }
}

