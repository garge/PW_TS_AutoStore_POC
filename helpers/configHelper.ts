import * as fs from 'fs';

interface Credentials {
    username: string;
    password: string;
}

interface Config {
    baseUrl: string;
    credentials: Credentials;
    
}

class ConfigHelper {
    private config: Config;
    private tdata:Config;
    
    constructor() {
        const data = fs.readFileSync('config.json', 'utf-8');
        this.config = JSON.parse(data);

        const testdata = fs.readFileSync('data.json','utf-8');
        this.tdata = JSON.parse(testdata);
    }

    getBaseUrl(): string {
        return this.config.baseUrl;
    }

    getUsername(): string {
        return this.config.credentials.username;
    }

    getPassword(): string {
        return this.config.credentials.password;
    }

}

export default new ConfigHelper();
