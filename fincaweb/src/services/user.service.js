import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
    getWholesaleConsumerView() {
        return axios.get(API_URL + 'all');
    }

    getRegularConsumerView() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getProducerView() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getTransportation() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }


}

export default new UserService();
