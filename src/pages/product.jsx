import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";

function ProductsPage() {
    return (
        <div className="flex justify-center">
            <CardProduct>
                <CardProduct.Header image="/images/vivobook.jpeg"/>
                <CardProduct.Body title="Laptop Baru Cuy">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia dignissimos ipsa ullam accusantium libero aperiam enim incidunt voluptatem laudantium beatae aut cum nisi perspiciatis itaque sequi inventore, delectus deleniti!
                </CardProduct.Body>
                <CardProduct.Footer price="3.000.000"/>
            </CardProduct>
        </div>
    );
}

export default ProductsPage;