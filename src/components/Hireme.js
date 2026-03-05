import React from "react";
import hireMe from "../assets/images/hireMe.png";

function Hireme() {
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire <span className="text-cyan-500">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">
                    Looking for a Frontend Developer?
                </p>
            </div>

            <div
                className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 
                flex gap-6 lg:flex-row flex-col-reverse items-center"
            >
                <div>
                    <h2 className="text-2xl font-semibold">
                        Let’s build something great together
                    </h2>

                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                        I am a Front-End Developer with over 2 years of experience 
                        building modern and responsive web applications. I specialize 
                        in React, TypeScript, and modern UI frameworks to create 
                        scalable and user-friendly interfaces.

                        Currently, I am working in a professional development 
                        environment and always open to new opportunities, 
                        collaborations, and challenging projects.
                    </p>

                    <button className="btn-primary mt-10">
                        Say Hello
                    </button>
                </div>

                <img
                    src={hireMe}
                    alt="hire me"
                    className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                />
            </div>
        </section>
    );
}

export default Hireme;