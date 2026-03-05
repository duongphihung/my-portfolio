import React from 'react';
import aboutImg from '../assets/images/about.png';

function About() {
    const info = [
        { text: 'Years Experience', count: '2+' },
        { text: 'Personal Projects', count: '4+' },
        { text: 'Companies Worked', count: '2' },
    ];

    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>

                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">

                    <div className="p-2">
                        <div className="text-gray-300 my-3">

                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                I am a Front-End Developer with over 2 years of experience in building modern web
                                applications. I graduated from the University of Information Technology and
                                Communication Vietnam-Korea.

                                I started my career as an intern and gained practical experience working on
                                real-world projects in a company environment. Currently, I am working as a
                                Front-End Developer where I focus on building responsive interfaces, optimizing
                                performance, and improving user experience using modern technologies such as
                                React, TypeScript, and modern UI frameworks.
                            </p>

                            <div className="flex m-10 items-center gap-7">
                                {info.map((content) => (
                                    <div key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="../assets/CV_Duong_Phi_Hung.pdf" className="block ml-6" download>
                                <button className="btn-primary">
                                    Download My CV
                                </button>
                            </a>

                        </div>
                    </div>

                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div
                            className="lg:w-96 h-full relative sm:w-10/12 w-11/12
                            max-w-sm aboutImg"
                        >
                            <img
                                src={aboutImg}
                                alt="about"
                                className="w-full object-cover bg-cyan-600 rounded-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;