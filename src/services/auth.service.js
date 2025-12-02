import axios from "axios";


export function login(data) {
    axios
    .post('https://fakestoreapi.com/auth/login', data)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (error){
        console.log(error)
    })
}