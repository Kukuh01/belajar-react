import axios from "axios";
import {jwtDecode} from "jwt-decode";

export function login(data, callback) {
    axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then(function (res) {
        callback(true, res.data.token);
        // console.log(res);
    })
    .catch(function (error){
        callback(false, error);
    })
}

export function getUsername(token){
    const decoded = jwtDecode(token);
    // console.log(decoded );
    return decoded.user;
}