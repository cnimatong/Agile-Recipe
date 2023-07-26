import React from "react";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container mx-auto flex px-5 py-20 items-center w-5/6">
                <div className="h-1/2 w-6/6 relative">
                    <img className="object-center" alt="hero" src="/avocado.jpeg" />
                    <div class="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="absolute lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left pl-10 mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white justify-start">32 Brilliant
                        <br className="hidden lg:inline-block" />Avocado Recipes
                    </h1>
                    <div className="flex justify-center">
                        <button className="inline-flex text-black bg-buttons border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See them all</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;