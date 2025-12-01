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

    const {image} = props;

    return (
        <a href="#" className="flex justify-center">
            <img src={image} alt="product" className="p-8 rounded-t-lg"/>
        </a>
    );
}

function Body(props) {

    const {children, title, key} = props;

    return (
        <div className="px-5 pb-5 h-full" key={key}>
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <p className="text-m text-white">{children}</p>
            </a>
        </div>
    );
}

function Footer(props){

    const {price, handleAddToCart, id} = props;

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp{" "} {price.toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</span>
            <Button variant="bg-blue-600" text="Add To Cart" onClick={() => handleAddToCart(id)}/>
        </div>
    );
}

// Teknik nested component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;