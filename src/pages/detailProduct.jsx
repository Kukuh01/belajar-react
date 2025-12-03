import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

export function DetailProductPage() {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(function () {
        getDetailProduct(id, function(data){
            setProduct(data);
        })
    }, [id])

    console.log(product)
    return(
        <div className="bg-white">
        {Object.keys(product).length >0  && (

        <div className="pt-6">

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <img
                src={product.image}
                alt={product.title}
                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            />
            </div>
            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
                </h1>
            </div>
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">$ {product.price}</p>
                {/* Reviews */}
                <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                    <div className="flex items-center">
                    {/* Active: "text-gray-900", Default: "text-gray-200" */}
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-900"
                    >
                        <path
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-900"
                    >
                        <path
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-900"
                    >
                        <path
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-900"
                    >
                        <path
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-200"
                    >
                        <path
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                        />
                    </svg>
                    </div>
                    <p className="sr-only">{product?.rating?.rate}</p>
                    <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                    {product?.rating?.count} reviews
                    </a>
                </div>
                </div>
                <form className="mt-10">
                {/* Colors */}
                <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>
                    <fieldset aria-label="Choose a color" className="mt-4">
                    <div className="flex items-center gap-x-3">
                        <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                            type="radio"
                            name="color"
                            defaultValue="white"
                            defaultChecked=""
                            aria-label="White"
                            className="size-8 appearance-none rounded-full bg-white forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                        </div>
                        <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                            type="radio"
                            name="color"
                            defaultValue="gray"
                            aria-label="Gray"
                            className="size-8 appearance-none rounded-full bg-gray-200 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                        </div>
                        <div className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                            type="radio"
                            name="color"
                            defaultValue="black"
                            aria-label="Black"
                            className="size-8 appearance-none rounded-full bg-gray-900 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-900 focus-visible:outline-3 focus-visible:outline-offset-3"
                        />
                        </div>
                    </div>
                    </fieldset>
                </div>
                {/* Sizes */}
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Size guide
                    </a>
                    </div>
                    <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                        <label
                        aria-label="XXS"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            disabled=""
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            XXS
                        </span>
                        </label>
                        <label
                        aria-label="XS"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            XS
                        </span>
                        </label>
                        <label
                        aria-label="S"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            defaultChecked=""
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            S
                        </span>
                        </label>
                        <label
                        aria-label="M"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            M
                        </span>
                        </label>
                        <label
                        aria-label="L"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            L
                        </span>
                        </label>
                        <label
                        aria-label="XL"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            XL
                        </span>
                        </label>
                        <label
                        aria-label="2XL"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            2XL
                        </span>
                        </label>
                        <label
                        aria-label="3XL"
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                        <input
                            type="radio"
                            name="size"
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            3XL
                        </span>
                        </label>
                    </div>
                    </fieldset>
                </div>
                <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                    Add to bag
                </button>
                </form>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                {/* Description and details */}
                <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">
                    {product.description}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

        )}
        </div>

    );
}