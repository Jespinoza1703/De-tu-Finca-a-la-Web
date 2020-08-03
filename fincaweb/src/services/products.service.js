import axios from "axios";


const API_URL = "https://kz-product-manager-2.herokuapp.com/";

class ProductsService {

    getCurrentProducerProducts(){
        const token = localStorage.getItem("token");
        const data = {
            Authorization: 'Bearer ' + token
        };
        return axios.get(API_URL + 'MyProducts', { headers: data});
    }

    getPendingOrders(){
        const token = localStorage.getItem("token");
        const data = {
            Authorization: 'Bearer ' + token
        };

        const url = API_URL + 'productores/orders';
        return axios.get(url, { headers: data});
    }

    changePackageState(packageId, newState){
        const token = localStorage.getItem("token");
        const data = {
            Authorization: 'Bearer ' + token
        };
        const url = API_URL + 'productores/orders/' + packageId;
        return axios.patch(url, {state: newState}, { headers: data});
    }
}

export default new ProductsService();
