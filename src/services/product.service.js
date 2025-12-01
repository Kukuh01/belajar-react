import axios from "axios";

export function getProducts(callback) {
    axios
        .get("https://fakestoreapi.com/products")
        .then(function (res){
            callback(res.data)
        })
        .catch(function(err){
            console.log(err);
        })
};