'use client'
import React from "react";
import { Button } from "@mui/material";

const Contact = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <img alt="feature" className="object-cover object-center h-full w-full" src="/contact.jpeg" />
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Sign up for our newsletter.</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get the latest food news, best recipes, and great tips delivered right to your inbox. Come for the food, Stay for the fun.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 w-full mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                            <div className="relative flex">
                                <input type="email" id="email" name="email" placeholder="Enter your email..." className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-5 w-full flex justify-center">
                                <Button variant="outlined" size="large" className="bg-white hover:bg-gray-200 border-black hover:border-gray text-black ">Sign Me Up!</Button>                             
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;