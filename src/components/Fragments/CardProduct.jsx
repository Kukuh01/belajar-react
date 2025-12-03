import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";

function CardProduct(props) {

    const { children } = props;

    return(
        <div className="w-full mx-3 my-2 max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
            {children}
        </div>
    );
}

function Header(props){

    const {image, id} = props;

    return (
        <Link to={`/product/${id}`} className="flex justify-center">
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover"/>
        </Link>
    );
}

function Body(props) {

    const {children, title, key} = props;

    return (
        <div className="px-5 pb-5 h-full" key={key}>
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0, 20)} ...</h5>
                <p className="text-m text-white">{children.substring(0, 100)} ...</p>
            </a>
        </div>
    );
}

function Footer(props){

    const {price, handleAddToCart, id} = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</span>
            <Button variant="bg-blue-600" text="Add To Cart" onClick={() => handleAddToCart(id)}/>
        </div>
    );
}

// Teknik nested component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;