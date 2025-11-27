import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";

// Rendering lists: Untuk merender banyak element sekaligus seperti looping
const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: "1.000.000",
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero aperiam enim incidunt voluptatem laudantium beatae aut cum nisi perspiciatis itaque sequi inventore, delectus deleniti!.`
    },
    {
        id: 2,
        title: "Sepatu Baru 2",
        price: "1.000.000",
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero`
    },
    {
        id: 3,
        title: "Sepatu Baru 2",
        price: "1.000.000",
        image: "/images/vivobook.jpeg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero`
    },
]

function ProductsPage() {
    return (
        <div className="flex justify-center">
            {products.map((product) => (

            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body title={product.title}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price}/>
            </CardProduct>
                
            ))}
        </div>
    );
}

export default ProductsPage;