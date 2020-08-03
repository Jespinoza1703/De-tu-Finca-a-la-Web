import axios from "axios";

const API_URL = "https://kz-product-manager-2.herokuapp.com/";

class RegionsService {
    getRegions() {
        return axios.get(API_URL + "region");
    }
}

export default new RegionsService();
