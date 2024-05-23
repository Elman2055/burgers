import axios from "axios";

axios.defaults.baseURL = "https://burgers-ea0fb-default-rtdb.firebaseio.com/";

const axiosBurger = axios;

export default axiosBurger;
