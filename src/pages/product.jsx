import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

/**
 * DATA PRODUK (static)
 * List produk yang akan dirender pada halaman.
 * Masing-masing produk memiliki id, nama, harga, gambar, dan deskripsi.
 */
// const products = [
//     {
//         id: 1,
//         name: "Sepatu Baru",
//         price: 1000000,
//         image: "/images/vivobook.jpeg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit...`
//     },
//     {
//         id: 2,
//         name: "Sepatu Baru 2",
//         price: 1000000,
//         image: "/images/vivobook.jpeg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit...`
//     },
//     {
//         id: 3,
//         name: "Sepatu Baru 3",
//         price: 1000000,
//         image: "/images/vivobook.jpeg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit...`
//     },
// ];

/**
 * Mengambil email user dari localStorage
 */
const email = localStorage.getItem("email");


function ProductsPage() {

    /**
     * STATE: cart
     * Menyimpan daftar item yang ditambahkan ke keranjang, format:
     * [
     *    { id: 1, qty: 2 },
     *    { id: 2, qty: 1 }
     * ]
     */
    const [cart, setCart] = useState([]);

    /**
     * STATE: totalPrice
     * Menyimpan total harga semua item dalam cart.
     */
    const [totalPrice, setTotalPrice] = useState(0);

    const [products, setProducts] = useState([]);


    useEffect(function(){
        getProducts(function(data){
            setProducts(data)
        });
    }, []);

    /**
     * USE EFFECT 1 – Component Did Mount
     * Dijalankan HANYA saat komponen pertama kali dirender.
     *
     * Tujuan:
     * - Mengambil cart dari localStorage agar cart tetap tersimpan meski halaman di-refresh.
     */
    useEffect(function () {
        setCart(
            JSON.parse(localStorage.getItem("cart")) || []
        );
    }, []); // dependency kosong = hanya sekali jalan


    /**
     * USE EFFECT 2 – Component Did Update (ketika 'cart' berubah)
     *
     * Fungsi:
     * 1. Menghitung total harga (qty * price).
     * 2. Menyimpan cart terbaru ke localStorage agar cart tidak hilang saat refresh.
     */
    useEffect(function () {
        if (products.length > 0 && cart.length > 0) {

            // Hitung total harga dengan reduce
            const sum = cart.reduce(function (acc, item) {

                // Cari produk berdasarkan id item
                const product = products.find((product) => product.id === item.id);

                // Accumulate total
                return acc + product.price * item.qty;
            }, 0);

            // Update state total harga
            setTotalPrice(sum);

            // Simpan cart ke localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        }

    }, [cart, products]); // hanya berjalan jika cart berubah


    /**
     * FUNCTION: handleLogout
     * Menghapus data login dari localStorage dan redirect ke halaman login.
     */
    function handleLogout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }


    /**
     * FUNCTION: handleAddToCart
     * Menambah item ke cart. Logika:
     * 1. Jika item sudah ada → tambahkan qty.
     * 2. Jika belum ada → tambahkan item baru dengan qty = 1.
     *
     * @param {number} id — id produk yang ditambahkan
     */
    function handleAddToCart(id) {

        // Jika item sudah ada dalam cart
        if (cart.find(item => item.id === id)) {

            // Update qty item tersebut
            setCart(
                cart.map(item =>
                    item.id === id
                        ? { ...item, qty: item.qty + 1 } // qty bertambah
                        : item
                )
            );

        } else {

            // Jika item belum ada → tambahkan item baru
            setCart([
                ...cart,
                {
                    id,
                    qty: 1
                }
            ]);
        }
    }

    // useRef (Disimpan tapi tidak re render)
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    function handleAddToCartRef(id) {
        cartRef.current = [
            ...cartRef.current,
            {
                id, qty: 1
            }
        ]
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    }

    const totalPriceRef = useRef(null);

    useEffect(function () {
        if(cart.length > 0){
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <Fragment>
            {/* BAGIAN HEADER */}
            <div className="flex h-20 bg-blue-600 justify-end text-white items-center px-10">
                {email}
                <Button
                    className="ml-5"
                    variant="ml-5 bg-red-600"
                    type="button"
                    text="logout"
                    onClick={handleLogout}
                />
            </div>

            {/* BAGIAN BODY */}
            <div className="flex justify-center">

                {/* LIST PRODUK */}
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (

                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                id={product.id}
                                price={product.price}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>

                    ))}
                </div>

                {/* BAGIAN CART */}
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
                            {products.length > 0 && cart.map((item) => {

                                // Cari data product berdasarkan id item
                                const product = products.find((product) => product.id === item.id);

                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                        <td>{item.qty}</td>
                                        <td>{(item.qty * product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                    </tr>
                                );
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td>
                                    <b>{totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Fragment>
    );
}

export default ProductsPage;
