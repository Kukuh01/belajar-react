import { Fragment, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";

// Rendering lists: Untuk merender banyak element sekaligus seperti looping
const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero aperiam enim incidunt voluptatem laudantium beatae aut cum nisi perspiciatis itaque sequi inventore, delectus deleniti!.`
    },
    {
        id: 2,
        name: "Sepatu Baru 2",
        price: 1000000,
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero`
    },
    {
        id: 3,
        name: "Sepatu Baru 2",
        price: 1000000,
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero`
    },
]

// Menerima json dari form login
const email = localStorage.getItem("email");


function ProductsPage() {

    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    //Handle logout
    function handleLogout() {

        //Removew localstorage
        localStorage.removeItem("email");
        localStorage.removeItem("password");

        window.location.href = "/login";
    }

    //Handle add to cart
    function handleAddToCart(id){
        if(cart.find(item => item.id === id)){
            setCart(
                cart.map(item => item.id === id ?{...item, qty: item.qty + 1} : item)
            )
        } else {
            setCart([
                ...cart, {
                    id,
                    qty: 1,
                }
            ])
        }
        // setCart([
        //     //Seperate operator
        //     ...cart, {
        //         id,
        //         qty: 1,
        //     } 
        // ])
    }

    return (
        <Fragment>
        <div className="flex h-20 bg-blue-600 justify-end text-white items-center px-10">{email}
            <Button className="ml-5" variant="ml-5 bg-red-600" type="button" text="logout" onClick={handleLogout}/>
        </div>
        <div className="flex justify-center">
        <div className="w-4/6 flex flex-wrap">
            {products.map((product) => (

            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body title={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer id={product.id} price={product.price} handleAddToCart={handleAddToCart}/>
            </CardProduct>
                
            ))}
        </div>
        <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const product = products.find((product) => product.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td>{product.name}</td>
                                <td>Rp{" "} {product.price.toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</td>
                                <td>{item.qty}</td>
                                <td>Rp {(item.qty * product.price).toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </div>
        </Fragment>
    );
}

export default ProductsPage;