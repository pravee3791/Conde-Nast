import axios from "axios";
import { HEADLINEENDPOINT, newsKey } from "../constants/constant";


/**
 * Singleton  NewsClass to get news data from the api code
 */
class NewsServiceC {
    private static instance: NewsServiceC;
    static getInstance() {
        if (!this.instance) {
            this.instance = new NewsServiceC()
        }
        return this.instance;
    }

    private async get(endpoint: string, options = {}) {
        return await axios.get(`${endpoint}`, options);
    }

    public async getHeadline(endpoint: string) {
        return await this.get(endpoint);
    }

}

const NewsServiceI = NewsServiceC.getInstance()
export default NewsServiceI;