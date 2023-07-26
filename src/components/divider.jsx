import React from "react";

const Divider = () =>{
    return(
        <section className="text-gray-600 body-font relative">
            <div className="container py-5 mx-auto">
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black opacity-25 h-1/2 w-5/6"></div>
                </div>
            </div>
        </section>
    )
}

export default Divider;