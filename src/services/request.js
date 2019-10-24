import axios from 'axios';
import { BASE_URL, TIMEOUT } from '../commons/constants';

axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = BASE_URL;

export default axios;
