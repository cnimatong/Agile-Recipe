'use client'
import React from "react";
import { Button } from "@mui/material";

const Gallery = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Recipe Gallery</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Discover a world of culinary inspiration in our Recipe Gallery. From comforting classics to innovative creations, our carefully curated collection offers a variety of mouthwatering recipes to suit any taste.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe1.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">TOP 50</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Rice Dishes</h1>
                        <p className="leading-relaxed">Embark on a culinary adventure with a tantalizing array of rice dishes, from aromatic biryanis to comforting risottos, offering a perfect balance of flavors and textures. </p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe2.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SEZCHUAN CUISINE</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mala Tofu Soup</h1>
                        <p className="leading-relaxed">Spice up your taste buds with Mala Tofu Soup, a fiery and flavorful blend of Sichuan peppercorns, aromatic spices, and silky tofu, delivering a satisfying and bold culinary experience.</p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe3.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">A FAVOURITE</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lasagna</h1>
                        <p className="leading-relaxed">Experience the ultimate comfort food with lasagna, where layers of pasta, savory fillings, and melted cheese come together to create a deliciously satisfying Italian classic.</p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe4.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SEASONAL</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Egg Bell Peppers</h1>
                        <p className="leading-relaxed">Discover the delightful union of eggs and bell peppers, where the vibrant flavors of the peppers enhance the richness of the eggs, resulting in a deliciously satisfying culinary fusion.</p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe5.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">EXCLUSIVE</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cheese Rice</h1>
                        <p className="leading-relaxed">Experience the irresistible combination of creamy cheese and fluffy rice in this delectable dish, where each bite is a symphony of indulgent flavors and comforting textures.</p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/recipe6.jpeg" />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">EXCLUSIVE</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Egg Salad</h1>
                        <p className="leading-relaxed">Indulge in the creamy simplicity of egg salad, a timeless classic that combines the richness of boiled eggs with a delightful blend of seasonings, creating a satisfying and versatile dish.</p>
                        <br />
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-grey-600 rounded text-lg">Learn More</button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="pt-20 w-full flex justify-center">
                    <Button variant="outlined" size="large" className="bg-white hover:bg-gray-200 border-black hover:border-gray text-black ">Show More Recipes</Button>         
                </div>
            </div>
        </section>
    )
}

export default Gallery;